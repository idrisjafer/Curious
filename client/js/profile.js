Template.profile_sidebar.helpers({
	fullname: function(){ 
		if(Meteor.user().profile.fullname){
			return Meteor.user().profile.fullname;
		}
	},
	email: function(){ return Meteor.user().emails[0].address; },
	address: function(){ return Meteor.user().profile.address; },
  	postalcode: function(){ return Meteor.user().profile.postalcode; },
  	city: function(){ return Meteor.user().profile.city; }
});

Template.profile_favorites.helpers({
	favorites: function(){
		return Meteor.user().profile.favorites;
	},
	productimage: function(){
		var imgID = JSON.stringify($(this)).slice(6,23);
		return Products.findOne({_id: imgID}, {}).picture1;
	}
});

Template.profile_favorites.events({
	'click .profile-favorites a': function(){
		productID = JSON.stringify($(this)).slice(6,23);
		Session.set('current_product', productID);
	}
});

Template.profile_favorites.picture1 = function() {
    currentProduct = JSON.stringify($(this)).slice(6,23);
	var imgID = Products.findOne({_id: currentProduct}, {}).picture1;
	return ProductsFS.find({_id: imgID}, {});
};

Template.profile_sidebar.profilepicture = function() {
	var imgID = Meteor.user().profile.profilepicture;
	return ProfilesFS.find({_id: imgID}, {});
};