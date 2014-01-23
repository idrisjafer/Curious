Template.hero_header.helpers({
	fullname: function() {
  		currentHero = Session.get('current_hero');
		return Meteor.users.findOne({_id: currentHero}).profile.fullname;
  	},
  	description: function() {
  		currentHero = Session.get('current_hero');
  		return Meteor.users.findOne({_id: currentHero}).profile.fulldescription.replace(/\n/g, "<br />");
  	}
});

Template.hero_content.helpers({
	fullname: function() {
  		currentHero = Session.get('current_hero');
		return Meteor.users.findOne({_id: currentHero}).profile.fullname;
  	},
  	whodescription: function() {
  		currentHero = Session.get('current_hero');
  		return Meteor.users.findOne({_id: currentHero}).profile.whodescription.replace(/\n/g, "<br />");
  	},
  	whydescription: function() {
  		currentHero = Session.get('current_hero');
  		return Meteor.users.findOne({_id: currentHero}).profile.whydescription.replace(/\n/g, "<br />");
  	}
});

Template.hero_header.profilepicture = function() {
  currentHero = Session.get('current_hero');
  var imgID = Meteor.users.findOne({_id: currentHero}).profile.bigpicture;
  return ProfilesFS.find({_id: imgID}, {});
};