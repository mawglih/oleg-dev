/**
 * @ngdoc overview
 * @name clApp
 * @description
 * # clApp
 *
 * Main module of the application.
 */
(function(){
'use strict';
    angular
    .module('clApp',['ui.router'])
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl:'../index.html'
        })
        .state('main', {
            url: '/',
            templateUrl:'views/main.html'
        });
    }
})();
