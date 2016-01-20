Template.home.helpers({
  messages: function(){
	return Messages.find();
  }
});

Template.home.events({
  'change #filterLocation': function(e){
        e.preventDefault();
        console.log(e.target.value);
        Session.set('selectedLoaction', e.target.value);
  },
});

Template.home.onRendered(function () {

	Session.set('inHome', true);
});
Template.home.onDestroyed(function(){
	Session.set('inHome', false);
});

Tracker.autorun(function(){
	Meteor.subscribe('messages', Session.get('selectedLoaction'), Session.get('inHome'));
});