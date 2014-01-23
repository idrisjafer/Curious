Template.maker_sidebar.helpers({
	fullname: function(){
		currentMaker = Session.get('current_maker');
		return Meteor.users.findOne({_id: currentMaker}).profile.fullname;
	},
	description: function(){
		currentMaker = Session.get('current_maker');
		return Meteor.users.findOne({_id: currentMaker}).profile.fulldescription.replace(/\n/g, "<br />");
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

Template.maker_sidebar.profilepicture = function() {
	currentMaker = Session.get('current_maker');
	var imgID = Meteor.users.findOne({_id: currentMaker}).profile.profilepicture;
	return ProfilesFS.find({_id: imgID}, {});
};

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

Template.maker_content.picture1 = function() {
    currentProduct = this._id;
	var imgID = Products.findOne({_id: currentProduct}, {}).picture1;
	return ProductsFS.find({_id: imgID}, {});
};

Template.maker_content.rendered = function(){
	/*$('.maker-content img').each(function(){
			background = $(this).attr('src');
			$(this).hide().parent().css('background-image', 'url("' + background + '")');

		$(this).load(function(){
			width = $(this).width();
			height = $(this).height();

			console.log(width);
			console.log(height);

			if(width < height){
			$(this).css('width', '100%').css('height', 'auto');
			}
			else{
				$(this).css('height', '100%').css('width', 'auto').css('margin-left', -(width / 2));
			}
		})
	});*/
}