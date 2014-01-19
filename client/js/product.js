Template.product_photo.helpers({
	picture1: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).picture1;
	},
	picture2: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).picture2;
	},
	picture3: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).picture3;
	},
	picture4: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).picture4;
	},
	picture5: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).picture5;
	},
	picture6: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).picture6;
	}
});

Template.product_info.helpers({
	title: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).title;
	},
	description: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).description;
	}
});

Template.product_sidebar.helpers({
	profilepicture: function(){
		currentProduct = Session.get('current_product');
		currentMakerId = Products.findOne({_id: currentProduct}, {}).maker;
		return Meteor.users.findOne({_id: currentMakerId}).profile.profilepicture;
	},
	fullname: function(){
		currentProduct = Session.get('current_product');
		currentMakerId = Products.findOne({_id: currentProduct}, {}).maker;
		return Meteor.users.findOne({_id: currentMakerId}).profile.fullname;
	},
	description: function(){
		currentProduct = Session.get('current_product');
		currentMakerId = Products.findOne({_id: currentProduct}, {}).maker;
		return Meteor.users.findOne({_id: currentMakerId}).profile.fulldescription;
	},
	favorited: function(){
		favorites = Meteor.user().profile.favorites;
		currentProduct = Session.get('current_product');
		if(($.inArray(currentProduct, favorites)) >= 0){
			return true;
		}
	}
});

Template.product_sidebar.events({
	'tap .product-sidebar .favorite': function(){
		currentProduct = Session.get('current_product');
		Meteor.users.update({_id: Meteor.userId()}, {$addToSet: {'profile.favorites': currentProduct}});
	},
	'tap .product-sidebar .favorited': function(){
		currentProduct = Session.get('current_product');
		Meteor.users.update({_id: Meteor.userId()}, {$pull: {'profile.favorites': currentProduct}});
	},
	'click .product-sidebar .maker a': function(){
		currentMakerId = Products.findOne({_id: currentProduct}, {}).maker;
		Session.set('current_maker', currentMakerId);
	}
});