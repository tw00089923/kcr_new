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



      
      this.helpers({
        parties: () => {
          return Parties.find({}, {sort: this.sort});
        },
        users: () => {
          return Meteor.users.find({});
        },
        partiesCount: () => {
          return Counts.get('numberOfParties');
        },
        page: 1,
        sort: {
          name: 1
        },
        searchText: '',
        isLoggedIn: () => {
          return Meteor.userId() !== null;
        },
        currentUserId: () => {
          return Meteor.userId();
        },
        images: () => {
          return Images.find({});
        }
      });



       $scope.myDate = new Date();
       $scope.minDate = new Date(

      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());


  $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());

       $scope.lines = ('201 202 203 204 205 206 207 208 209 210').split(' ').map(function(name) {
        return { ss : name};
      });

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