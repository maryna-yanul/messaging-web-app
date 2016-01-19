Meteor.publish('messages', function (admin) {
    return Messages.find();
});
