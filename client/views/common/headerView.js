Template.home.helpers({
  
});

Template.home.events({
  'click .exit': function(e){
        e.preventDefault();
        Meteor.logout(function () {
            Router.go('userloginView')
        });
    },
});