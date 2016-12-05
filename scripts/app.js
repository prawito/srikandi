var app = angular.module ('srikandiApp', ['ui.router', 'angular-loading-bar']);

app.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/home');
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  })
  .state('main', {
    abstract: true,
    templateUrl: 'templates/main.html'
  })
  .state('main.home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })
  .state('main.color', {
    url: '/color',
    templateUrl: 'templates/color.html'
  })
  .state('main.grid', {
    url: '/grid',
    templateUrl: 'templates/grid.html'
  })
  .state('main.button', {
    url: '/button',
    templateUrl: 'templates/button.html'
  })
  .state('main.profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html'
  });
});

app.controller('srikandiCtrl', function($scope){
  $scope.name = 'Prawito Hudoro';
});

app.controller('homeCtrl', function($scope, $http){
  console.log('hai')
})
