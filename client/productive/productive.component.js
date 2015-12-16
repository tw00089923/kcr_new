angular.module('socially').directive('productive', function () {
  return {
    restrict: 'E',
    templateUrl: () => {
      if (Meteor.isCordova) {
        return '/packages/socially-mobile/client/productive/socially.html';
      }
      else{
        return '/packages/socially-browser/client/productive/productive.html';
      }
      
    },
    controllerAs: 'productive',
    controller: function ($scope, $reactive,$timeout, $mdSidenav,$log, $mdDialog) {

    

      $reactive(this).attach($scope);
      
      $scope.ad = 3;
      

      $scope.items = [1,2,3,4,5];
      $scope.selected = [];
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };

  
    }

  }
});