if (Meteor.isServer) {

  Meteor.publish("userData", function() {
    return Meteor.users.find({}, {fields : {'emails' : 1}});
  });

}