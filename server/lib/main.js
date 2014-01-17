if (Meteor.isServer) {

	// Allow to update users' fields
	Meteor.users.allow({
		update: function (userId, user) {
		return userId === user._id;
		}
	});

	// Publish custom user fields to client
	Meteor.publish("userData", function() {
		return Meteor.users.find({}, {fields : {'emails': 1, 'fullname': 1, 'shortdescription': 1, 'fulldescription': 1}});
	});

	// Add a custom user field
	// Meteor.users.update({_id: "D2WFttQoiLFt55uqE"}, {$set : {fullname: 'Martijn Hoogerland'}});
}