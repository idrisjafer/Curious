if (Meteor.isServer) {

	// Allow to update users' fields
	Meteor.users.allow({
		update: function (userId, user) {
		return userId === user._id;
		}
	});

	// Publish custom user fields to client
	Meteor.publish("userData", function() {
		return Meteor.users.find({}, {fields : {'emails': 1, 'profile': 1}});
	});
	
}