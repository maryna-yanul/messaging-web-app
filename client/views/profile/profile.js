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
});

Template.profileView.events({
	'click .formatting': function (e) {
        e.preventDefault();
        Session.set('editProfile', true);
    },
    'click .save-data': function (e) {
        e.preventDefault();
        var data = {};
        data.username = Meteor.user().profile.username;
        Session.set('editProfile', false);
        Meteor.users.update(Meteor.userId(), {$set: {profile: data}});
    },
    'submit form': function(e){
        e.preventDefault();
        var post = {
            message: $(e.target).find('[data-name=message]').summernote('code'),
            owner: Meteor.userId(),
        }
    },
});

Template.profileView.onRendered(function () {
        $('#edit').summernote();
});