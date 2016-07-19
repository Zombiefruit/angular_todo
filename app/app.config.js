'use strict';

angular.
  module('todoApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/todo', {
          template: '<todo-list></todo-list>'
        }).
        otherwise('/todo');
    }
  ]);
