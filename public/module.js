var app = angular.module('resApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){


  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('home', {
    url: "/",
    templateUrl: "templates/home.html",
    controller: "homeCtrl"
  })
  .state('history', {
    url: "/history/",
    templateUrl: "templates/history.html",
    controller: "histCtrl"
  })
  





})
// .run(function(Character){
//   Character.getAll();
// })

