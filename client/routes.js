angular.module('socially')
  .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('parties', {
        url: '/parties',
        template: '<parties-list></parties-list>'
      })
      .state('partyDetails', {
        url: '/parties/:partyId',
        template: '<party-details></party-details>',
        resolve: {
          currentUser: ($q) => {
            if (Meteor.userId() == null) {
              return $q.reject('AUTH_REQUIRED');
            }
            else {
              return $q.resolve();
            }
          }
        }
      })
      .state('login', {
        url: '/login',
        template: '<login></login>'
      })
      .state('qrcode', {
        url: '/qrcode',
        template: '<qrcode></qrcode>'
      })
      .state('productive', {
        url: '/productive',
        template: '<productive></productive>'
      })
      .state('calendar', {
        url: '/calendar',
        template: '<calendar></calendar>'
      })
       .state('showdetail', {
        url: '/showdetail',
        template: '<showdetail></showdetail>'
      })
        .state('home', {
        url: '/home',
        template: '<home></home>'
      })
      .state('register', {
        url: '/register',
        template: '<register></register>'
      })
      .state('resetpw', {
        url: '/resetpw',
        template: '<resetpw></resetpw>'
      });

    $urlRouterProvider.otherwise("/home");
  })
  .run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      if (error === 'AUTH_REQUIRED') {
        $state.go('parties');
      }
    });
  });