var myApp = angular.module('dangerZone', ['ui.router', 'ngAnimate']);

angular.module('dangerZone')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'templates-home.html',
        controller: 'homeStateCtrl'
      })
      
      .state('work', {
        url: '/work',
        templateUrl: 'templates-work.html'
      })
      
      .state('contacts', {
        url: '/contacts',
        templateUrl: 'templates-contacts.html'
      })
    $urlRouterProvider.otherwise('/home');
  }])
  
  .run(['$rootScope', '$state', function($rootScope, $state) {
      $rootScope.$on('$stateChangeStart', function(evt, to, params) {          
          if (to.redirectTo) {
            evt.preventDefault();
            $state.go(to.redirectTo, params, {location: 'replace'})
          }
      })
  }])
  
  .controller('MainCtrl', function($scope) {
    $scope.name = "Nabil";
  })

  .controller('homeStateCtrl', function($scope) {
    $scope.name = "Natasha Decoste";
    $scope.skills = [
        {'name': 'HTML', 'duration': 3},
        {'name': 'jQuery', 'duration': 8},
        {'name': 'WordPress', 'duration': 5},
        {'name': 'Java', 'duration': 2}
    ];
  })

  .component('natashaHeader', {
      templateUrl: 'templates-natasha-header.html',
      bindings: {
        dash: '@?'
      }
  })