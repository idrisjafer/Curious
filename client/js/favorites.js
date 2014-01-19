Template.my_favorites.helpers({
	favorites: function(){
		return Meteor.user().profile.favorites;
	},
	productimage: function(){
		var imgID = JSON.stringify($(this)).slice(6,23);
		return Products.findOne({_id: imgID}, {}).picture1;
	}
});

Template.my_favorites.events({
	'click a': function(){
		productID = JSON.stringify($(this)).slice(6,23);
		Session.set('current_product', productID);
	}
});