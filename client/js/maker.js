Template.maker_info.helpers({
	fullname: function(){
		currentMaker = Session.get('current_maker');
		return Meteor.users.findOne({_id: currentMaker}).fullname;
	},
	shortdescription: function(){
		currentMaker = Session.get('current_maker');
		return Meteor.users.findOne({_id: currentMaker}).shortdescription;
	},
	fulldescription: function(){
		currentMaker = Session.get('current_maker');
		return Meteor.users.findOne({_id: currentMaker}).fulldescription;
	}
});

Template.maker_info.events({
	'click .full-link': function(e){
		e.preventDefault();

		$('.short').addClass('hidden');
		$('.full').removeClass('hidden');
		$('.full-link').addClass('current');
		$('.short-link').removeClass('current');
	},
	'click .short-link': function(e){
		e.preventDefault();

		$('.short').removeClass('hidden');
		$('.full').addClass('hidden');
		$('.short-link').addClass('current');
		$('.full-link').removeClass('current');
	}
});

// $('.maker-info').swipeEvents().bind("swipeLeft", function(){ alert('swipe') });

Template.maker_products.helpers({
	products: function() {
		return Products.find();
	}
});

Template.products.helpers({
  products: function() {
  	currentMaker = Session.get('current_maker');
    return Products.find('maker', currentMaker);
  }
});