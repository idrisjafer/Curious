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

Template.heroes_overview.profilepicture = function() {
  currentHero = this._id;
  var imgID = Meteor.users.findOne({_id: currentHero}).profile.bigpicture;
  return ProfilesFS.find({_id: imgID}, {});
};