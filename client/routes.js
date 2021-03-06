Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'home', controller: 'MainController'});

MainController = RouteController.extend({
  action: function() {
  	this.render('home', {
	    data: function () {
	      return { posts: ['post red', 'post blue'] }
	    }
  	});
  }
});
Router.route('/login', {name: 'userloginView'});
Router.route('/registration', {name: 'userregistrationView'});
Router.route('/profile', {name: 'profileView'});





