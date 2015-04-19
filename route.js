var App = angular.module("App", ['ui.router']);
App.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '',
            controller: 'MainController',
            templateUrl: 'templates/main.html'
        })
        .state('main.profile', {
            url: '/profile',
            templateUrl: 'templates/profile.html',
            controller: 'ProfileController'
        })
        .state('main.contacts   ', {
            url: '/contacts',
            templateUrl: 'templates/contacts.html',
            controller: 'ContactsController'
        });
    $urlRouterProvider.otherwise('');
});

/*
//Define an angular module for our app !!!master
var App = angular.module('App', ['ngRoute']);

//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController

App.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'templates/main.html',
                controller: 'mainController'
            }).
            when('/about', {
                templateUrl: 'templates/about.html',
                controller: 'aboutController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
*/