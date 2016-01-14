angular.module("socially.browser").directive('d3', function() {
  return {
    restrict: 'E',
    templateUrl: '/packages/socially-browser/client/d3/d3.html',
    controllerAs: 'd3',
    controller: function ($scope, $reactive, $state) {
      $reactive(this).attach($scope);



       $('#calendar').fullCalendar({
        // put your options and callbacks here
       })

      this.credentials = {
        email: '',
        password: ''
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


