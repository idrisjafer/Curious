if (Meteor.isClient) {
  Meteor.subscribe('userData');
  $(function() {
      FastClick.attach(document.body);
  });

  Meteor.subscribe('myContactsFiles');
}

Deps.autorun(function() {
    Meteor.subscribe('userData');
});

Router.configure({
  layoutTemplate: 'wrapper'
});

Template.status_bar.events({
  'tap .status-bar span' : function(){
    $('nav').toggleClass('hidden');
  },
  'tap nav a': function(){
    $('nav').toggleClass('hidden');
  }
});

Router.map(function () {
  
  this.route('home', {
    path: '/',
    template: 'home_screen',
    before: function(){
      if (!Meteor.user()) {
        this.render('login_screen');
        hideStatusbar();
        this.stop();
      }
      else{
        showStatusbar();
      }
    },
    after: function() {
      $('.status-bar span').html('Dashboard');
    }
  });

  this.route('admin', {
    path: '/admin',
    template: 'admin_screen',
    before: function(){
      if (!Meteor.user()) {
        this.render('login_screen');
        hideStatusbar();
        this.stop();
      }
      else{
        showStatusbar();
      }
    },
    after: function() {
      $('.status-bar span').html('Administrator');
    }
  });

  this.route('products', {
    path: '/products',
    template: 'products_screen',
    before: function(){
      if (!Meteor.user()) {
        this.render('login_screen');
        hideStatusbar();
        this.stop();
      }
      else{
        showStatusbar();
      }
    },
    after: function() {
      $('.status-bar span').html('Inspiratie board');
    }
  });

  this.route('product', {
    path: '/product',
    template: 'product_screen',
    before: function(){
      if (!Meteor.user()) {
        this.render('login_screen');
        hideStatusbar();
        this.stop();
      }
      else{
        showStatusbar();
      }
    },
    after: function() {
      $('.status-bar span').html('Product');
    }
  });

  this.route('maker', {
    path: '/maker',
    template: 'maker_screen',
    before: function(){
      if (!Meteor.user()) {
        this.render('login_screen');
        hideStatusbar();
        this.stop();
      }
      else{
        showStatusbar();
      }
    },
    after: function() {
      currentMaker = Session.get('current_maker');
      title = Meteor.users.findOne({_id: currentMaker}).profile.fullname;
      $('.status-bar span').html(title);
    }
  });

  this.route('profile', {
    path: '/profile',
    template: 'profile_screen',
    before: function(){
      if (!Meteor.user()) {
        this.render('login_screen');
        hideStatusbar();
        this.stop();
      }
      else{
        showStatusbar();
      }
    },
    after: function() {
      $('.status-bar span').html('Mijn profiel');
    }
  });

  this.route('favorites', {
    path: '/favorites',
    template: 'favorites_screen',
    before: function(){
      if (!Meteor.user()) {
        this.render('login_screen');
        hideStatusbar();
        this.stop();
      }
      else{
        showStatusbar();
      }
    },
    after: function() {
      $('.status-bar span').html('Mijn favorieten');
    }
  });

  this.route('heroes', {
    path: '/heroes',
    template: 'heroes_screen',
    before: function(){
      if (!Meteor.user()) {
        this.render('login_screen');
        hideStatusbar();
        this.stop();
      }
      else{
        showStatusbar();
      }
    },
    after: function() {
      $('.status-bar span').html('Heroes');
    }
  });

  this.route('hero', {
    path: '/hero',
    template: 'hero_screen',
    before: function(){
      if (!Meteor.user()) {
        this.render('login_screen');
        hideStatusbar();
        this.stop();
      }
      else{
        showStatusbar();
      }
    },
    after: function() {
      $('.status-bar span').html('Hero');
    }
  });

  this.route('newcommission', {
    path: '/newcommission',
    template: 'newcommission_screen',
    before: function(){
      if (!Meteor.user()) {
        this.render('login_screen');
        hideStatusbar();
        this.stop();
      }
      else{
        showStatusbar();
      }
    },
    after: function() {
      $('.status-bar span').html('Opdracht geven');
    }
  });

  this.route('project', {
    path: '/project',
    template: 'project_screen',
    before: function(){
      if (!Meteor.user()) {
        this.render('login_screen');
        hideStatusbar();
        this.stop();
      }
      else{
        showStatusbar();
      }
    },
    after: function() {
      $('.status-bar span').html('Project');
    }
  });

  this.route('inbox', {
    path: '/inbox',
    template: 'inbox_screen',
    before: function(){
      if (!Meteor.user()) {
        this.render('login_screen');
        hideStatusbar();
        this.stop();
      }
      else{
        showStatusbar();
      }
    },
    after: function() {
      $('.status-bar span').html('Inbox');
    }
  });

});

function hideStatusbar(){
  $('.status-bar').addClass('hidden');
}

function showStatusbar(){
  $('.status-bar').removeClass('hidden');
}