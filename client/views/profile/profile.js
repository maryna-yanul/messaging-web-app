Template.profileView.helpers({
   editProfile: function () {
        return Session.get('editProfile') || false;
    },
    curentProfile: function () {
        return Meteor.userId() == this._id
    },
    profile: function () {
        if (Meteor.user()) {
            return this.profile;
        }
    },
    userName: function(){
        return Meteor.user().profile.username;
    },
    messages: function() {
    return Messages.find();
  },
    userLocation: function(){
    return Meteor.user().profile.location;
  },
    userAddress: function(){
        return Meteor.user().emails[0].address;
    },
});

Template.profileView.events({
	'click .formatting': function (e) {
        e.preventDefault();
        Session.set('editProfile', true);
    },
    'click .save-data': function (e) {
        e.preventDefault();
        Meteor.users.update({_id:Meteor.user()._id}, {
            $set:{"profile.username": $('#username').val(),
            "profile.location":$('#location').val(),
        }});

        Session.set('editProfile', false);
        
    },
    'submit form': function(e){
        e.preventDefault();
        Messages.insert({
            text: $(e.target).find('[data-name=text]').summernote('code'),
            locationM: Meteor.user().profile.location,
            owner: Meteor.userId(),
        });
            $('#edit').summernote('reset')
    },

});


Template.profileView.onRendered(function () {
        $('#edit').summernote();
});