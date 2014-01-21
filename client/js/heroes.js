Template.heroes_overview.helpers({
  heroes: function() {
    return Meteor.users.find({'profile.role': 'hero'});
  }
});

Template.heroes_overview.events({
'click .heroes_hero': function(){
    Session.set('current_hero', this._id);
  }
});