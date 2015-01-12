		var demoApp = angular.module('demoApp',  ["ngRoute"]);

		demoApp.config(function ($routeProvider){
			$routeProvider
				.when('/',
					{ 
						controller: 'HomeController',
						templateUrl: 'Partials/View1.html'
					})
				.when('/view2',
				{
					controller: 'PhotosController',
					templateUrl: 'Partials/View2.html'
				})
				.when('/view3',
				{
					controller: 'VideosController', 
					templateUrl: 'Partials/View3.html'
				})
				.otherwise({redirectTo: '/'});
		});

