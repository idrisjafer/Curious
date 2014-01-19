Template.maker_sidebar.helpers({
	fullname: function(){
		currentMaker = Session.get('current_maker');
		return Meteor.users.findOne({_id: currentMaker}).profile.fullname;
	},
	description: function(){
		currentMaker = Session.get('current_maker');
		return Meteor.users.findOne({_id: currentMaker}).profile.fulldescription;
	},
	rating: function(){
		currentMaker = Session.get('current_maker');
		return Meteor.users.findOne({_id: currentMaker}).profile.rating;
	},
	ratingamount: function(){
		currentMaker = Session.get('current_maker');
		return Meteor.users.findOne({_id: currentMaker}).profile.ratingamount;
	}
});

Template.maker_sidebar.events({
	'click .maker-contact-link': function(){
		$('.maker .maker-contact').removeClass('hidden');
		$('.maker .maker-content').addClass('hidden');
	}
});

Template.maker_contact.events({
	'click .maker-contact .cancel': function(){
		$('.maker .maker-contact').addClass('hidden');
		$('.maker .maker-content').removeClass('hidden');
	}
});

Template.maker_contact.helpers({
	fullname: function(){
		currentMaker = Session.get('current_maker');
		return Meteor.users.findOne({_id: currentMaker}).profile.fullname;
	}
});

Template.maker_content.helpers({
	products: function() {
  		currentMaker = Session.get('current_maker');
    	return Products.find({'maker': currentMaker});
	},
	availabilityIsLow: function(){
		currentMaker = Session.get('current_maker');
	    if(Meteor.users.findOne({_id: currentMaker}).profile.availability === 'low'){
			return true;
	    }
	},
	availabilityIsMedium: function(){
		currentMaker = Session.get('current_maker');
		if(Meteor.users.findOne({_id: currentMaker}).profile.availability === 'medium'){
			return true;
	    }
	},
	availabilityIsHigh: function(){
		currentMaker = Session.get('current_maker');
		if(Meteor.users.findOne({_id: currentMaker}).profile.availability === 'high'){
	    	return true;
	    }
	}
});

/*Template.maker_products.helpers({
	products: function() {
		return Products.find();
	}
});

Template.products.helpers({
  products: function() {
  	currentMaker = Session.get('current_maker');
    return Products.find('maker', currentMaker);
  }
});*/