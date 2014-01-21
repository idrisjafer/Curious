Template.my_favorites.helpers({
	favorites: function(){
		return Meteor.user().profile.favorites;
	}
});

Template.my_favorites.events({
	'click a': function(){
		productID = JSON.stringify($(this)).slice(6,23);
		Session.set('current_product', productID);
	}
});

Template.my_favorites.picture1 = function() {
    currentProduct = JSON.stringify($(this)).slice(6,23);
	var imgID = Products.findOne({_id: currentProduct}, {}).picture1;
	return ProductsFS.find({_id: imgID}, {});
};