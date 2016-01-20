Meteor.publish('messages', function (location) {
    return Messages.find({'locationM': location});
});
// Meteor.publish('filterLocation', function (locationO) {
//     return Messages.find({'locationM': locationO});
// });