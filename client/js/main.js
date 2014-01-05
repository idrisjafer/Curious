if (Meteor.isClient) {
  Meteor.subscribe('userData');
}

Router.configure({
  layoutTemplate: 'wrapper'
});

Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'home_screen',
    before: function () {
      if (!Meteor.user()) {
        this.render('login_screen');
        $('.status-bar').addClass('hidden');
        this.stop();
      }
      else{
        $('.status-bar').removeClass('hidden');
      }
    }
  });

  this.route('admin', {
    path: '/admin',
    template: 'admin_screen',
    before: function () {
      if (!Meteor.user()) {
        this.render('login_screen');
        this.stop();
      }
    }
  });

  this.route('products', {
    path: '/products',
    template: 'products_screen',
    before: function () {
      if (!Meteor.user()) {
        this.render('login_screen');
        this.stop();
      }
    }
  });

  this.route('product', {
    path: '/product',
    template: 'product_screen',
    before: function () {
      if (!Meteor.user()) {
        this.render('login_screen');
        this.stop();
      }
    }
  });

});