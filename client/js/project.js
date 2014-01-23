Template.project_info.helpers({
	title: function(){
		currentProject = Session.get('current_project');
		return currentProject.title;
	},
	maker: function(){
		currentProject = Session.get('current_project');
		currentMakerId = currentProject.maker;
		return Meteor.users.findOne({_id: currentMakerId}).profile.fullname;
	}
})

Template.project_timeline.events({
	'tap .milestone': function(e){
		$('.milestone div').addClass('hidden');
		$(e.target).children().toggleClass('hidden');
	}
})