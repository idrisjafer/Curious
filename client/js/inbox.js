Template.inbox_overview.events({
	'tap .inbox-overview': function(e){
		$('.inbox-overview').addClass('small');
	}
});

Template.inbox_messages.events({
	'tap .short': function(e){
		$(e.target).addClass('open').next('.message').removeClass('closed').addClass('open');
	}
})