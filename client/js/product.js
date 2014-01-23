Template.product_photo.helpers({
	ifPic1: function(){
		currentProduct = Session.get('current_product');
		if(Products.findOne({_id: currentProduct}, {}).picture1){
			return true;
		}
	},
	ifPic2: function(){
		currentProduct = Session.get('current_product');
		if(Products.findOne({_id: currentProduct}, {}).picture2){
			return true;
		}
	},
	ifPic3: function(){
		currentProduct = Session.get('current_product');
		if(Products.findOne({_id: currentProduct}, {}).picture3){
			return true;
		}
	},
	ifPic4: function(){
		currentProduct = Session.get('current_product');
		if(Products.findOne({_id: currentProduct}, {}).picture4){
			return true;
		}
	},
	ifPic5: function(){
		currentProduct = Session.get('current_product');
		if(Products.findOne({_id: currentProduct}, {}).picture5){
			return true;
		}
	},
	ifPic6: function(){
		currentProduct = Session.get('current_product');
		if(Products.findOne({_id: currentProduct}, {}).picture6){
			return true;
		}
	}
});

Template.product_photo.picture1 = function() {
    currentProduct = Session.get('current_product');
	var imgID = Products.findOne({_id: currentProduct}, {}).picture1;
	return ProductsFS.find({_id: imgID}, {});
};

Template.product_photo.picture2 = function() {
    currentProduct = Session.get('current_product');
	var imgID = Products.findOne({_id: currentProduct}, {}).picture2;
	return ProductsFS.find({_id: imgID}, {});
};

Template.product_photo.picture3 = function() {
    currentProduct = Session.get('current_product');
	var imgID = Products.findOne({_id: currentProduct}, {}).picture3;
	return ProductsFS.find({_id: imgID}, {});
};

Template.product_photo.picture4 = function() {
    currentProduct = Session.get('current_product');
	var imgID = Products.findOne({_id: currentProduct}, {}).picture4;
	return ProductsFS.find({_id: imgID}, {});
};

Template.product_photo.picture5 = function() {
    currentProduct = Session.get('current_product');
	var imgID = Products.findOne({_id: currentProduct}, {}).picture5;
	return ProductsFS.find({_id: imgID}, {});
};

Template.product_photo.picture6 = function() {
    currentProduct = Session.get('current_product');
	var imgID = Products.findOne({_id: currentProduct}, {}).picture6;
	return ProductsFS.find({_id: imgID}, {});
};

Template.product_info.helpers({
	title: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).title;
	},
	description: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).description.replace(/\n/g, "<br />");
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
		return Meteor.users.findOne({_id: currentMakerId}).profile.fulldescription.replace(/\n/g, "<br />");
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

Template.product_sidebar.userpicture = function() {
	currentProduct = Session.get('current_product');
	currentMakerId = Products.findOne({_id: currentProduct}, {}).maker;
	var imgID = Meteor.users.findOne({_id: currentMakerId}).profile.profilepicture;
	return ProfilesFS.find({_id: imgID}, {});
};