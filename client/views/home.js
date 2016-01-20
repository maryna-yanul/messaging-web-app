Template.home.helpers({
  messagesAll: function() {
        if(Meteor.user()){
            Meteor.subscribe('messages', 'filterLocation');
        }
    return Messages.find();
  },
});

Template.home.events({
  'change #filterLocation': function(e){
        e.preventDefault();
        console.log(e.target.value);
  		var locationO = e.target.value;
  },
});