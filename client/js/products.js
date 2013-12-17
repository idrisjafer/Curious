Template.products.helpers({
  products: function() {
    return Products.find();
  }
});

Template.products.events({
'click .product': function(){
    Session.set('current_product', this._id);
  }
});