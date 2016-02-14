angular.module("socially.browser").directive('calendar', function() {
  return {
    restrict: 'E',
    templateUrl: '/packages/socially-browser/client/calendar/calendar.html',
    controllerAs: 'calendar',
    controller: function ($scope, $reactive, $state) {
      $reactive(this).attach($scope);
       
      this.subscribe('users');
      this.subscribe('calendar');

      this.helpers({
        users: () => {
          return Meteor.users.find({});
        },
         parties: () => {
            return Parties.find({});
          },
        calendars :() =>{
          return Calendar.find({}).fetch();
        }
      });

       

        $('#calendar').fullCalendar({

         
      events: {
        url: 'calendar.json',
        error: function() {
          $('#script-warning').show();
        }
      },
       
    


            
          selectable:true ,
          lang:'zh-tw',
        
          
          header: {
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
                  },
          height: 500

          });

      this.title = '';
      this.date = '';

      this.pushcalendar =() =>{


       this.date =  moment().format('YYYY-MM-DD[T]HHH:mm:ss');

         $('#calendar').fullCalendar({

          
    events: function(start, end, callback) {
      
        
          
    },
    color: 'yellow',   // an option!
    textColor: 'black' // an option!




        });

       };
  

        


      this.error = '';

      this.login = () => {
        Meteor.loginWithPassword(this.credentials.email, this.credentials.password, (err) => {
          if (err) {
            this.error = err;
          }
          else {
            $state.go('parties');
          }
        });
      };



    }
  }
});


