Meteor.publish('messages', function (location) {
    return Messages.find({'locationM': location});
});
