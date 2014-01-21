Products = new Meteor.Collection('products');
Makers = new Meteor.Collection('makers');

ProductsFS = new CollectionFS('productsfs', { autopublish: true });
ProfilesFS = new CollectionFS('profilesfs', { autopublish: true });