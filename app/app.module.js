(function() {
  'use strict';

  angular.module('todoApp', [
    'ngAnimate',
    'ngRoute',
    'todoList',
    'ngMaterial'
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('pink')
    .warnPalette('red')
    .backgroundPalette('blue-grey');
  });
})();
