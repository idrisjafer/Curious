Template.products_overview.helpers({
	products: function() {
  		currentCategory = Session.get('current_category');
  		isSearch = Session.get('product_search');
  		search = $('.products-filters input').val();
  		if(isSearch){
  			return Products.find({'description' : {$regex : ".*"+ search +".*"}});
  		}
  		else{
  			if(currentCategory == 'nieuwe'){
	    		return Products.find({}, {sort: {'date_created': -1}});
	    	}
	    	else if(currentCategory == 'alle'){
	    		return Products.find({}, {sort: {'date_created': 1}});
	    	}
	  		else if(currentCategory){
	    		return Products.find({ $or: [ {'category.0': currentCategory}, {'category.1': currentCategory}, {'category.2': currentCategory}] });
	    	}
	    	else{
	    		return Products.find();
	    	}
  		}
    }
});

Template.products_overview.events({
'click .products-overview a': function(){
    Session.set('current_product', this._id);
  }
});

Template.products_filters.events({
	'tap .products-current-category': function(e){
		$('.products-categories').toggleClass('hidden');
		$(e.target).toggleClass('highlight');
	},
	'click .products-categories li': function(e){
		var category = $(e.target).text();
		Session.set('current_category', $(e.target).attr('class'));
		$('.products-current-category').text(category).toggleClass('highlight');
		$('.products-categories').addClass('hidden');
	},
	'keyup input': function(e){
		search = $(e.target).val();
		Session.set('product_search', search);
	}
});

Template.products_overview.picture1 = function() {
    currentProduct = this._id;
	var imgID = Products.findOne({_id: currentProduct}, {}).picture1;
	return ProductsFS.find({_id: imgID}, {});
};