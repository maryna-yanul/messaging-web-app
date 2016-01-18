Template.headerView.helpers({
  
});

Template.headerView.events({
	'click .pushMessage': function(e){
        e.preventDefault();
		Router.go('profileView');
	},
  'click .exit': function(e){
        e.preventDefault();
        Meteor.logout(function () {
            Router.go('userloginView')
        });
    },
});