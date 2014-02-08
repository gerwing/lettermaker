'use strict';

angular.module('angularApp', [
  'ngRoute'
])
    .config(function ($routeProvider,$locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html'
            })
            .when('/send', {
                templateUrl: 'views/send.html'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    });
