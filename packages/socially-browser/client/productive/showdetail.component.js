angular.module('socially.browser').directive('showdetail', function () {
  return {
    restrict: 'E',
    templateUrl: '/packages/socially-browser/client/productive/showdetail.html',
    controllerAs: 'showdetail',
    controller: function ($scope, $stateParams, $reactive, $mdDialog) {
      $reactive(this).attach($scope);

      this.helpers({
        isLoggedIn: () => {
          return Meteor.userId() !== null;
        },
         users: () => {
          return Meteor.users.find({});
        }
      });

      
      this.close = () => {
        $mdDialog.hide();
      };

      



     
        
    }
  }
});