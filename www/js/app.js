// Duuniexpo2017 App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('DuuniExpo17', ['ionic'])

        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                    // for form inputs)
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                    // Don't remove this line unless you know what you are doing. It stops the viewport
                    // from snapping when text inputs are focused. Ionic handles this internally for
                    // a much nicer keyboard experience.
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })
        .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

            $stateProvider
                    .state('app', {url: '/app', abstract: true, templateUrl: 'templates/Menu.html', controller: 'navigationController'})
                    .state('app.frontpage', {url: "/Etusivu", views: {'menuContent': {templateUrl: "templates/Frontpage.html"}}})
                    .state('app.schedule', {url: "/Aikataulu", views: {'menuContent': {templateUrl: "templates/Schedule.html"}}})
                    .state('app.map', {url: "/Messukartta", views: {'menuContent': {templateUrl: "templates/Map.html"}}})
                    .state('app.collaborators', {url: "/Yhteistyökumppanit", views: {'menuContent': {templateUrl: "templates/Collaborators.html"}}})
                    .state('app.contacts', {url: "/Ota yhteyttä", views: {'menuContent': {templateUrl: "templates/Contacts.html"}}})
                    .state('app.lahellasydanta', {url: "/Lahellasydanta-konsertti", views: {'menuContent': {templateUrl: "templates/Lahellasydanta.html"}}})
                    .state('app.projectteam', {url: "/Projektitiimi", views: {'menuContent': {templateUrl: "templates/ProjectTeam.html"}}});
            $urlRouterProvider.otherwise("/app/Etusivu");
//            $ionicConfigProvider.views.maxCache(0);
        });
