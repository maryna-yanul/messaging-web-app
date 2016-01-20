Meteor.publish('messages', function (location, inHome) {
	if(!inHome){
		return false;
	}
    return !location ? Messages.find({}) : Messages.find({'locationM': location});

});
Meteor.publish('profileMessages', function (owner, inProfile) {
	console.log(inProfile)
	if(!inProfile){
		return false;
	}
    return Messages.find({'owner': owner});
});
