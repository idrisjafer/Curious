Template.login.events({

  'submit #login-form' : function(e, t){
    e.preventDefault();

    var email = t.find('#login-email').value;
    var password = t.find('#login-password').value;

    Meteor.loginWithPassword(email, password, function(err){
      if (err){
        Session.set('login_error', 'Error: ' + err.reason);
        alert(err.reason);
      }
      else{
        Session.set('login_error', '');
      }
    });

    return false;
  },
  'tap .show-login' : function(e){
    e.preventDefault();
    $('#login-form').removeClass('hidden');
    $('.register-buttons').addClass('hidden');
  },
  'tap .email-login' : function(e){
    e.preventDefault();
    $('#register-form').removeClass('hidden');
    $('.register-buttons').addClass('hidden');
  },
  'tap .annuleren' : function(e){
    e.preventDefault();
    $('#register-form, #login-form').addClass('hidden');
    $('.register-buttons').removeClass('hidden');
  }

  /*
  'tap .fb-login' : function(e, t) {
      e.preventDefault();
      Meteor.loginWithFacebook(function(err){
        if (err){
          console.log(err);
          Session.set('login_error', 'Error: ' + err);
        }
        else{
          console.log(err);
          Session.set('login_error', 'Error: ' + err);
          alert('logged in');
          Meteor.Router.to('/home');
        }
      });
      return false;
  }
  */

});

Template.login.login_error = function () {
  return Session.get('login_error');
};

Template.logged_in.events({

  'tap #logout' : function(e, t) {
    e.preventDefault();
    Meteor.logout();
    return false;
  }

});

Template.logged_in.user_name = function() {
  return Meteor.user().emails[0].address;
};

Template.register.events({

  'submit #register-form' : function(e, t){
    e.preventDefault();

    var email = t.find('#account-email').value;
    var password = t.find('#account-password').value;

    Accounts.createUser({email: email, password: password, profile: {fullname: ''}}, function(err){
        if (err){
          alert('error');
        }
        else{
          alert('hoi');
        }
    });

    return false;
  }

});