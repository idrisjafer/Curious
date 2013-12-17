Template.add_product.events({
  'click .submit-product': function(e){
    Products.insert({
      title: $('.product-title').val(),
      description: $('.product-description').val(),
      shortdescription: $('.product-short-description').val(),
      productiontime: $('.product-production-time').val(),
      material: $('.product-material').val(),
      length: $('.product-length').val(),
      width: $('.product-width').val(),
      height: $('.product-height').val(),
      madeon: $('.product-made-on').val(),
      picture1: $('.product-picture1').val(),
      picture2: $('.product-picture2').val(),
      picture3: $('.product-picture3').val(),
      maker: Meteor.userId()
    });
    e.preventDefault();
  }
});

Template.register_maker.events({

  'submit #register-maker' : function(e, t){
    e.preventDefault();

    var email = t.find('#maker-email').value;
    var password = t.find('#maker-password').value;

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