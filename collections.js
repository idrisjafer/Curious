Products = new Meteor.Collection('products');
Makers = new Meteor.Collection('makers');
Projects = new Meteor.Collection('projects');

ProductsFS = new CollectionFS('productsfs', { autopublish: true });
ProfilesFS = new CollectionFS('profilesfs', { autopublish: true });