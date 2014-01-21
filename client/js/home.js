Template.home_heroes.helpers({
  heroes: function() {
    return Meteor.users.find({'profile.role': 'hero'});
  }
});

Template.home_heroes.events({
	'click .home-heroes .info a': function(){
		Session.set('current_hero', this._id);
	}
})