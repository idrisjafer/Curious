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

    alert('Je product is toegevoegd');
    e.preventDefault();
  },
  'change .product-upload1': function (e) {
    var files = e.target.files;
    var newFileID = ProductsFS.storeFiles(files);
    $('.product-picture1').val(newFileID);
  },
  'change .product-upload2': function (e) {
    var files = e.target.files;
    var newFileID = ProductsFS.storeFiles(files);
    $('.product-picture2').val(newFileID);
  },
  'change .product-upload3': function (e) {
    var files = e.target.files;
    var newFileID = ProductsFS.storeFiles(files);
    $('.product-picture3').val(newFileID);
  },
  'change .product-upload4': function (e) {
    var files = e.target.files;
    var newFileID = ProductsFS.storeFiles(files);
    $('.product-picture4').val(newFileID);
  },
  'change .product-upload5': function (e) {
    var files = e.target.files;
    var newFileID = ProductsFS.storeFiles(files);
    $('.product-picture5').val(newFileID);
  },
  'change .product-upload6': function (e) {
    var files = e.target.files;
    var newFileID = ProductsFS.storeFiles(files);
    $('.product-picture6').val(newFileID);
  }
});

Template.edit_profile.events({
  'click #save-profile': function(e){

    Meteor.users.update({_id: Meteor.userId()}, {$set: {profile: {
      fullname: $('#profile-full-name').val(), 
      profilepicture: $('#profile-picture').val(),
      rating: $('#profile-rating').val(),
      ratingamount: $('#profile-rating-amount').val(),
      fulldescription: $('#profile-full-description').val(),
      role: $('#profile-role').val(),
      address: $('#profile-address').val(),
      postalcode: $('#profile-postal-code').val(),
      city: $('#profile-city').val(),
      availability: $('#profile-availability').val()
    }}});

    alert('Profiel is aangepast');
    e.preventDefault();
  }
});

Template.edit_profile.helpers({
  fullname: function(){ return Meteor.user().profile.fullname; },
  profilepicture: function(){ return Meteor.user().profile.profilepicture; },
  rating: function(){ return Meteor.user().profile.rating; },
  ratingamount: function(){ return Meteor.user().profile.ratingamount; },
  fulldescription: function(){ return Meteor.user().profile.fulldescription; },
  address: function(){ return Meteor.user().profile.address; },
  postalcode: function(){ return Meteor.user().profile.postalcode; },
  city: function(){ return Meteor.user().profile.city; },
  roleIsNormal: function(){
    if(Meteor.user().profile.role === 'normal'){
      return true
    }
  },
  roleIsMaker: function(){
    if(Meteor.user().profile.role === 'maker'){
      return true
    }
  },
  roleIsHero: function(){
    if(Meteor.user().profile.role === 'hero'){
      return true
    }
  },
  availabilityIsLow: function(){
    if(Meteor.user().profile.availability === 'low'){
      return true;
    }
  },
  availabilityIsMedium: function(){
    if(Meteor.user().profile.availability === 'medium'){
      return true;
    }
  },
  availabilityIsHigh: function(){
    if(Meteor.user().profile.availability === 'high'){
      return true;
    }
  }
});

Template.register_maker.events({
  'submit #register-maker' : function(e, t){
    e.preventDefault();

    var email = t.find('#maker-email').value;
    var password = "awkward";

    Accounts.createUser({email: email, password: password, profile: {role: 'maker'}}, function(err){
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

Template.fileTable.files = function() {
    //show all files that have been published to the client, with most recently uploaded first
    return ProductsFS.find({}, { sort: { uploadDate:-1 } });
};

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