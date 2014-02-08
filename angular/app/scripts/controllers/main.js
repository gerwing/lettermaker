'use strict';

angular.module('angularApp')
  .controller('MainCtrl', ['$scope','$http',
    function($scope,$http) {
        //Create new empty newsletter object
        $scope.newsletter = {};
        $scope.newsletter.articles = [];
        $scope.newsletter.events = [];

        //Set Methods
        $scope.addArticle = function() {
            $scope.newsletter.articles.push({});
        }
        $scope.addEvent = function() {
            $scope.newsletter.events.push({});
        }
        $scope.sendNewsletter = function() {
            //Create and send newsletter
            $http.post('/newsletter', $scope.newsletter);
        };
    }]);
