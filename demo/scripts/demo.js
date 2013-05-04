'use strict';

angular.module('componentDemo', ['alchemy'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/example.html',
        controller: 'onEnterController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('componentDemo').controller('onEnterController', function($scope) {
    
    $scope.keyPress = function(value) {
        $scope.input = value;
    };

});
