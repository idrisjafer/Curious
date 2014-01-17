Template.add_product.events({
  'click .submit-product': function(e){
    Products.insert({
      title: $('.product-title').val(),
      description: $('.product-description').val(),
      picture1: $('.product-picture1').val(),
      picture2: $('.product-picture2').val(),
      picture3: $('.product-picture3').val(),
      picture4: $('.product-picture4').val(),
      picture5: $('.product-picture5').val(),
      picture6: $('.product-picture6').val(),
      maker: Meteor.userId()
    });

    e.preventDefault();
  }
});

Template.edit_profile.events({
  'click #save-profile': function(e){

    Meteor.users.update({_id: Meteor.userId()}, {$set: {profile: {
      fullname: $('#profile-full-name').val(), 
      profilepicture: $('#profile-picture').val(),
      rating: $('#profile-rating').val(),
      ratingamount: $('#profile-rating-amount').val(),
      fulldescription: $('#profile-full-description').val()
    }}});

    alert('Profiel is aangepast');
    e.preventDefault();
  }
});

Template.register_maker.events({
  'submit #register-maker' : function(e, t){
    e.preventDefault();

    var email = t.find('#maker-email').value;
    var password = "awkward";

    Accounts.createUser({email: email, password: password}, function(err){
        if (err){
          alert(err);
        }
        else{
          alert('Maker is aangemaakt (Email = ' + email + ' Wachtwoord = ' + password);
          Makers.insert({makerId: Meteor.userId()});
        }
    });

    return false;
  }
});

Template.register_hero.events({
  'submit #register-hero' : function(e, t){
    e.preventDefault();

    var email = t.find('#hero-email').value;
    var password = "awkward";

    Accounts.createUser({email: email, password: password, profile: {role: 'hero'}}, function(err){
        if (err){
          alert(err);
        }
        else{
          alert('Hero is aangemaakt (Email = ' + email + ' Wachtwoord = ' + password);
        }
    });

    return false;
  }
});

Template.admin_screen.isMaker = function(){
  if(Meteor.user()){
    if(Makers.findOne({makerId: Meteor.userId()})){
      return true;
    }
    else{
      return false;
    }
  }
};