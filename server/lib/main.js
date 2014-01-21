if (Meteor.isServer) {

		var handler = {
        "fileHandler": function (options) {
            return {
                blob: options.blob,
                fileRecord: options.fileRecord
            };
        }
    }
    ProductsFS.fileHandlers(handler);
    ProfilesFS.fileHandlers(handler);

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

	// Publish uploads
	Meteor.publish('myContactsFiles', function() {
	    if (this.userId) {
	        return ContactsFS.find({ owner: this.userId }, { limit: 100 });
	    }
	});


	
}