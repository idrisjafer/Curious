if (Meteor.isClient) {
  Meteor.Router.add({
    '/': 'home_screen',
    '/home': 'home_screen',
    '/backend': 'back_end'
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

  Meteor.Router.filter('requireLogin');

  Meteor.startup( function() {
	filepicker.setKey("Auj9wAFhRKW7YkHRdY1Zwz");
	filepicker.constructWidget(document.getElementById('attachment'));
  });
}