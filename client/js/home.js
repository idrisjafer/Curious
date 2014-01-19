Template.home_heroes.helpers({
  heroes: function() {
    return Meteor.users.find({'profile.role': 'hero'});
  }
});
