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
    controller: function ($scope, $reactive,$timeout, $mdSidenav,$log, $mdDialog,$mdToast) {

    

      $reactive(this).attach($scope);



        
      
      this.helpers({
        books: function() {
          return Books.find({});            
        },

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

        this.subscribe('books');
        this.subscribe('parties');
        this.subscribe('users');



       $scope.myDate = new Date();
       $scope.minDate = new Date(

      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());

      $scope.works=[];

      $scope.starttime = moment();

      this.work ={};


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

    $scope.clearwork = function (a){

      work.splice(indexof(a),1);
    };

    $scope.addwork =function(){


    };

    $scope.update = function() {

      if( $scope.works.length >= 1 ){
        Books.insert({daywork : $scope.works});
        $scope.works=[];
           }

      else {
        console.log("MASSAGE");
             }
        

      };




    $scope.expression = function(){

      if ($scope.works) {
          $scope.list.push(this.work);
          $scope.text = '';
        };

    };


    $scope.deletethis= function (a) {
          $scope.works.splice(0, 1);

        };


      this.checkelement = function () {
        $mdDialog.show({
          template: '<showdetail></showdetail>',
          clickOutsideToClose: false
        });
      };
$scope.emailsend = function(){
      Meteor.call('sendEmail','liaowenhao@kcr.com.tw','liaowenhao@kcr.com.tw','Hello howard','hello');
          
      console.log("E-mail successed");
          };
     /* this.checkelement = function () {
        $mdDialog.show({
          template: '<showdetail></showdetail>',
          clickOutsideToClose: false
        });
      }; */




    }
  }
});