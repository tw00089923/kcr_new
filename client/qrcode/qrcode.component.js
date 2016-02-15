angular.module('socially').directive('qrcode', function () {
  return {
    restrict: 'E',
    templateUrl: () => {
      if (Meteor.isCordova) {
        return '/packages/socially-mobile/client/qrcode/qrcode.html';
      }
      else{
        return '/packages/socially-browser/client/qrcode/qrcoderead.html';
      }
      
    },
    controllerAs: 'qrcode',
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

    
     
        

        this.qrcodeinsert = () =>{

          var abc =["www.google.com","www.yahoo.com","www.hotmail.com"];
          this.qrcodename = '';
          var aps = this.qrcodename ;
         
          abc.push(aps);

    
          
          for(i =0 ; i < abc.length ; i++ ){
          $('#qrcode').qrcode({width: 64,height: 64,text:abc[i]});

           };
          
        };

        
    }
  }
});