Template.products_overview.helpers({
  products: function() {
    return Products.find();
  }
});

Template.products_overview.events({
'click .products-overview a': function(){
    Session.set('current_product', this._id);
  }
});

Template.products_overview.picture1 = function() {
    currentProduct = this._id;
	var imgID = Products.findOne({_id: currentProduct}, {}).picture1;
	return ProductsFS.find({_id: imgID}, {});
};