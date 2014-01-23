Template.newcommission_content.events({
	'click .next.create-project': function(e){
		Projects.insert({
	    	title: Session.get('current-projectname'),
	    	description: Session.get('current-projectdescription'),
	    	user: Meteor.userId(),
	    	maker: Session.get('current_maker'),
	    	favorite1: {
	    		image: Session.get('favorite1'),
	    		description: $('.commission-favorite1-text textarea').val(),
	    	},
	    	favorite2: {
	    		image: Session.get('favorite2'),
	    		description: $('.commission-favorite2-text textarea').val(),
	    	},
	    	favorite3: {
	    		image: Session.get('favorite3'),
	    		description: $('.commission-favorite3-text textarea').val(),
	    	},
	    	favorite4: {
	    		image: Session.get('favorite4'),
	    		description: $('.commission-favorite4-text textarea').val(),
	    	}
	    });
	    alert('Project aangemaakt');
		e.preventDefault();
	},
	'keyup #commission-title': function(event){
		projectname = $(event.target).val();
		Session.set('current-projectname', projectname)
	},
	'keyup #commission-description': function(event){
		projectdescription = $(event.target).val();
		Session.set('current-projectdescription', projectdescription)
	},
	'click .four .previous': function(){
		$('.four').addClass('hidden-right');
		$('.three').removeClass('hidden-left');
	},
	'click .three .previous': function(){
		$('.three').addClass('hidden-right');
		$('.two').removeClass('hidden-left');
	},
	'click .two .previous': function(){
		$('.two').addClass('hidden-right');
		$('.one').removeClass('hidden-left');
	},
	'click .one .next': function(){
		$('.one').addClass('hidden-left');
		$('.two').removeClass('hidden-right');
	},
	'click .two .next': function(){
		$('.two').addClass('hidden-left');
		$('.three').removeClass('hidden-right');
	},
	'click .three .next': function(){
		$('.three').addClass('hidden-left');
		$('.four').removeClass('hidden-right');
	},
	'click .two .skip': function(){
		$('.two').addClass('hidden-left');
		$('.three').removeClass('hidden-right').addClass('hidden-left');
		$('.four').removeClass('hidden-right');
	},
	'tap .choose-favorites img': function(){
		$('.choose-favorites').addClass('hidden-bottom');
		if($('.choose-favorites-buttons .clicked').hasClass('favorite1')){
			Session.set('favorite1', this._id);
			$('#commission-favorite1').val(this._id);
		}
		if($('.choose-favorites-buttons .clicked').hasClass('favorite2')){
			Session.set('favorite2', this._id);
			$('#commission-favorite2').val(this._id);
		}
		if($('.choose-favorites-buttons .clicked').hasClass('favorite3')){
			Session.set('favorite3', this._id);
			$('#commission-favorite3').val(this._id);
		}
		if($('.choose-favorites-buttons .clicked').hasClass('favorite4')){
			Session.set('favorite4', this._id);
			$('#commission-favorite4').val(this._id);
		}
	},
	'tap .choose-favorites-buttons li': function(event){
		$('.choose-favorites').removeClass('hidden-bottom');
		$('.choose-favorites-buttons .hidden').first().removeClass('hidden');
		$('.choose-favorites-buttons li').removeClass('clicked');
		$(event.target).addClass('clicked');
	},
	'tap .three .choose-favorites-buttons li.favorite1': function(event){
		$('.commission-favorite2-text, .commission-favorite3-text, .commission-favorite4-text').addClass('hidden');	
		$('.commission-favorite1-text').removeClass('hidden');	
	},
	'tap .three .choose-favorites-buttons li.favorite2': function(event){
		$('.commission-favorite1-text, .commission-favorite3-text, .commission-favorite4-text').addClass('hidden');	
		$('.commission-favorite2-text').removeClass('hidden');	
	},
	'tap .three .choose-favorites-buttons li.favorite3': function(event){
		$('.commission-favorite1-text, .commission-favorite2-text, .commission-favorite4-text').addClass('hidden');	
		$('.commission-favorite3-text').removeClass('hidden');	
	},
	'tap .three .choose-favorites-buttons li.favorite4': function(event){
		$('.commission-favorite1-text, .commission-favorite2-text, .commission-favorite3-text').addClass('hidden');	
		$('.commission-favorite4-text').removeClass('hidden');	
	},
	'tap .three .save': function(event){
		$('.commission-favorite1-text, .commission-favorite2-text, .commission-favorite3-text, .commission-favorite4-text').addClass('hidden');	
	}
});

Template.newcommission_content.helpers({
	favorites: function(){
		return Meteor.user().profile.favorites;
	},
	ifPic1: function(){
		currentProduct = JSON.stringify($(this)).slice(6,23);
		if(Products.findOne({_id: currentProduct}, {}).picture1){
			return true;
		}
	},
	ifPic2: function(){
		currentProduct = JSON.stringify($(this)).slice(6,23);
		if(Products.findOne({_id: currentProduct}, {}).picture2){
			return true;
		}
	},
	ifPic3: function(){
		currentProduct = JSON.stringify($(this)).slice(6,23);
		if(Products.findOne({_id: currentProduct}, {}).picture3){
			return true;
		}
	},
	ifPic4: function(){
		currentProduct = JSON.stringify($(this)).slice(6,23);
		if(Products.findOne({_id: currentProduct}, {}).picture4){
			return true;
		}
	},
	ifPic5: function(){
		currentProduct = JSON.stringify($(this)).slice(6,23);
		if(Products.findOne({_id: currentProduct}, {}).picture5){
			return true;
		}
	},
	ifPic6: function(){
		currentProduct = JSON.stringify($(this)).slice(6,23);
		if(Products.findOne({_id: currentProduct}, {}).picture6){
			return true;
		}
	},
	projectname: function(){
		return Session.get('current-projectname');
	},
	projectdescription: function(){
		return Session.get('current-projectdescription');
	},
	makername: function(){
		currentMaker = Session.get('current_maker');
		return Meteor.users.findOne({_id: currentMaker}).profile.fullname;
	},
});

Template.newcommission_content.picture1 = function() {
    currentProduct = JSON.stringify($(this)).slice(6,23);
	var imgID = Products.findOne({_id: currentProduct}, {}).picture1;
	return ProductsFS.find({_id: imgID}, {});
};

Template.newcommission_content.picture2 = function() {
    currentProduct = JSON.stringify($(this)).slice(6,23);
	var imgID = Products.findOne({_id: currentProduct}, {}).picture2;
	return ProductsFS.find({_id: imgID}, {});
};

Template.newcommission_content.picture3 = function() {
    currentProduct = JSON.stringify($(this)).slice(6,23);
	var imgID = Products.findOne({_id: currentProduct}, {}).picture3;
	return ProductsFS.find({_id: imgID}, {});
};

Template.newcommission_content.picture4 = function() {
    currentProduct = JSON.stringify($(this)).slice(6,23);
	var imgID = Products.findOne({_id: currentProduct}, {}).picture4;
	return ProductsFS.find({_id: imgID}, {});
};

Template.newcommission_content.picture5 = function() {
    currentProduct = JSON.stringify($(this)).slice(6,23);
	var imgID = Products.findOne({_id: currentProduct}, {}).picture5;
	return ProductsFS.find({_id: imgID}, {});
};

Template.newcommission_content.picture6 = function() {
    currentProduct = JSON.stringify($(this)).slice(6,23);
	var imgID = Products.findOne({_id: currentProduct}, {}).picture6;
	return ProductsFS.find({_id: imgID}, {});
};

Template.newcommission_favorites.favorite1 = function() {
    imgID = Session.get('favorite1');
	return ProductsFS.find({_id: imgID}, {});
};

Template.newcommission_favorites.favorite2 = function() {
    imgID = Session.get('favorite2');
	return ProductsFS.find({_id: imgID}, {});
};

Template.newcommission_favorites.favorite3 = function() {
    imgID = Session.get('favorite3');
	return ProductsFS.find({_id: imgID}, {});
};

Template.newcommission_favorites.favorite4 = function() {
    imgID = Session.get('favorite4');
	return ProductsFS.find({_id: imgID}, {});
};