'use strict';

/**
 * @ngdoc overview
 * @name contentVisualizationApp
 * @description
 * # contentVisualizationApp
 *
 * Main module of the application.
 */
angular
  .module('contentVisualizationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-table',
    'c.components',
    'c.sections',
    'c.util',
    'ui.bootstrap',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/scripts/sections/home/index.html',
        controller: 'c.util.controllers.StaticPageController',
      })

      .when('/about', {
        templateUrl: 'app/scripts/sections/home/about.html',
        controller: 'c.util.controllers.StaticPageController',
      })

      .when('/compare/:type1/:type2', {
        templateUrl: 'app/scripts/sections/home/compare.html',
        controller: 'c.util.controllers.StaticPageController',
      })
      .when('/size', {
        templateUrl: 'app/scripts/sections/home/size.html',
        controller: 'c.util.controllers.StaticPageController',
      })
      // BFA for all types
      .when('/signatures/bfa', {
        templateUrl: 'app/scripts/sections/home/bfa.html',
        controller: 'c.util.controllers.StaticPageController',
      })
      // BFC for all types
      .when('/signatures/bfc', {
        templateUrl: 'app/scripts/sections/home/bfc.html',
        controller: 'c.util.controllers.StaticPageController',
      })
      // BFCC for all types
      .when('/signatures/bfcc', {
        templateUrl: 'app/scripts/sections/home/bfcc.html',
        controller: 'c.util.controllers.StaticPageController',
      })
      // FHT for all types
      .when('/signatures/fht/:offset', {
        templateUrl: 'app/scripts/sections/home/fht.html',
        controller: 'c.util.controllers.StaticPageController',
      })
      // Visualizations
      .when('/visualize/bfa/:file', {
        templateUrl: 'app/scripts/sections/visualization/bfa.html',
        controller: 'c.util.controllers.StaticPageController',
      })
      .when('/visualize/bfc/:file', {
        templateUrl: 'app/scripts/sections/visualization/bfc.html',
        controller: 'c.util.controllers.StaticPageController',
      })
      .when('/visualize/bfcc/:file', {
        templateUrl: 'app/scripts/sections/visualization/bfcc.html',
        controller: 'c.util.controllers.StaticPageController',
      })
      .when('/visualize/fht/:offset/:file', {
        templateUrl: 'app/scripts/sections/visualization/fht.html',
        controller: 'c.util.controllers.StaticPageController',
      })

      .otherwise({
        redirectTo: '/'
      });
  });
