Template.hero_header.helpers({
	fullname: function() {
  		currentHero = Session.get('current_hero');
		return Meteor.users.findOne({_id: currentHero}).profile.fullname;
  	},
  	description: function() {
  		currentHero = Session.get('current_hero');
  		return Meteor.users.findOne({_id: currentHero}).profile.fulldescription;
  	}
});

Template.hero_content.helpers({
	fullname: function() {
  		currentHero = Session.get('current_hero');
		return Meteor.users.findOne({_id: currentHero}).profile.fullname;
  	},
  	whodescription: function() {
  		currentHero = Session.get('current_hero');
  		return Meteor.users.findOne({_id: currentHero}).profile.whodescription;
  	},
  	whydescription: function() {
  		currentHero = Session.get('current_hero');
  		return Meteor.users.findOne({_id: currentHero}).profile.whydescription;
  	}
})