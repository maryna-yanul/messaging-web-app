Template.userregistrationView.helpers({
	email: function(){
		if(Meteor.user() !== null){
			return Meteor.user().emails[0].address
		}
	}
});

Template.userregistrationView.events({
	'submit form': function(event){
        event.preventDefault();
        $error =$('.error');
        $error.text('');
        if(event.target.password0.value === event.target.password1.value){
            Accounts.createUser({
                email: event.target.email.value,
                password: event.target.password0.value,
                profile: {
                    username: event.target.nameUser.value,
                }
            }, function (err) {

                if(err){
                    console.log(err);
                    $error.text(err.reason);
                } else{
                    Router.go('/home');
                }
            });
        } else {
            $error.text('Passwords should be the same');
        }


    }
});

Template.userregistrationView.onRendered(function (){
   
});