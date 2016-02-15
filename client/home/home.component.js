
angular.module('socially').directive('home', function () {
  return {
    restrict: 'E',
    templateUrl: () => {
      if (Meteor.isCordova) {
        return '/packages/socially-mobile/client/home/home.html';
      }
      else {
        return '/packages/socially-browser/client/home/home.html';
      }
    },
    controllerAs: 'home',
    controller: function ($scope, $reactive,$timeout, $mdSidenav,$log, $mdDialog) {

    

      $reactive(this).attach($scope);


      

     

           var originatorEv;
          this.openMenu = function($mdOpenMenu, ev) {
          originatorEv = ev;
          $mdOpenMenu(ev);
           };
        this.notificationsEnabled = true;
        this.toggleNotifications = function() {
          this.notificationsEnabled = !this.notificationsEnabled;
        };
        this.redial = function() {
          $mdDialog.show(
            $mdDialog.alert()
              .targetEvent(originatorEv)
              .clickOutsideToClose(true)
              .parent('body')
              .title('Suddenly, a redial')
              .textContent('You just called a friend; who told you the most amazing story. Have a cookie!')
              .ok('That was easy')
          );
          originatorEv = null;
        };
        this.checkVoicemail = function() {
          // This never happens.
        };



      this.helpers({
        isLoggedIn: () => {
          return Meteor.userId() !== null;
        },
        currentUser: () => {
          return Meteor.user();
        }
      });
       
      this.logout = () => {
        Accounts.logout();
      }
 
 

  
    }

  }
});