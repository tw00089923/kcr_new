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





    }
  }
});