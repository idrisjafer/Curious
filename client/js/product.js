Template.product_meta.helpers({
	title: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).title;
	},
	description: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).description;
	},
	shortdescription: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).shortdescription;
	},
	productiontime: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).productiontime;
	},
	material: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).material;
	},
	length: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).length;
	},
	width: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).width;
	},
	height: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).height;
	},
	madeon: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).madeon;
	},
	maker: function(){
		currentProduct = Session.get('current_product');
		currentMakerId = Products.findOne({_id: currentProduct}, {}).maker;
		return Meteor.users.findOne({_id: currentMakerId}).emails[0].address;
	}
});

Template.product_coverphoto.events({
	'tap img' : function(){
		$('.coverphoto .info div').toggleClass('hidden');
		$('.coverphoto h3').toggleClass('small');
	}
});

Template.product_coverphoto.helpers({
	title: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).title;
	},
	picture1: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).picture1;
	},
	madeon: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).madeon;
	},
	productiontime: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).productiontime;
	},
	shortdescription: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).shortdescription;
	},
	material: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).material;
	}
});

Template.product_photo.helpers({
	picture2: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).picture2;
	},
	picture3: function(){
		currentProduct = Session.get('current_product');
		return Products.findOne({_id: currentProduct}, {}).picture3;
	}
});