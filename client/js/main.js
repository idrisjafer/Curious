if (Meteor.isClient) {
  Meteor.Router.add({
    '/': 'home_screen',
    '/home': 'home_screen',
    '/admin': 'admin_screen',
    '/products': 'products_screen',
    '/product': 'product_screen'
  });

  Meteor.Router.filters({
    requireLogin: function(page) {
      if (Meteor.user()) {
        return page;
      } else {
        return 'login_screen';
      }
    }
  });

  $(document).ready(function(){
    if($('.login')){
      $('.status-bar').hide();
    }
    else{
      $('.status-bar').show();
    }
  });

  Meteor.Router.filter('requireLogin');
  Meteor.subscribe('userData');
}