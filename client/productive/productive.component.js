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

      $scope.works=[];

      $scope.adaa = document.querySelector('#fors');
      $scope.adab = angular.element('#fors').scope();

      $scope.starttime = moment();




      $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());

       $scope.lines = ('201 202 203 204 205 206 207 208 209 210').split(' ').map(function(name) {
        return { ss : name};
      });

       $scope.showAlert = function() {
       
       var confirm = $mdDialog.confirm()
          $mdDialog.show({
          template: '<add-new-party-modal></add-new-party-modal>',
          clickOutsideToClose: true
       
    });
    
  };
  
    $scope.check2 = function() {
         var confirm = $mdDialog.confirm().title('Would you like to delete your debt?')
         .ok('Please do it!')

         .ariaLabel('Lucky day')
         .cancel('Sounds like a scam');
         $mdDialog.show(confirm);
    };






    $scope.expression = function(){

      if ($scope.works) {
          $scope.list.push(this.work);
          $scope.text = '';
        };

    };



    }
  }
});