
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

      this.theis = angular.forEach(this.calendars, 2);
//date

      this.nowdates = moment().format("MMM Do YY");
      this.difnowsdate = moment("20160201", "DD").fromNow();
//chart
       
      var margin = {top: 20, right: 20, bottom: 70, left: 30},
          width = 900 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;



      var x = d3.time.scale()
    .domain([new Date(2012, 0, 1), new Date(2012, 11, 31)])
    .range([0, width]);

      var y = d3.scale.linear()
          .range([height, 0]);

    
      var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom")
          .ticks(d3.time.months)
          .tickSize(5, 0)
          .tickFormat(d3.time.format("%B"));

      var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left");

      var line = d3.svg.line()
          .x(function(d) { return x(d.date); })
          .y(function(d) { return y(d.close); });

      var svg = d3.select("#monthchart").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")"); 


         svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
          .append("text")
            .attr("transform", "rotate(0)")
            .attr("x",90)
            .attr("y", 0)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Persent(%)");


          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis)
              .selectAll("text")
              .style("text-anchor", "start")
              .attr("class","font-8")
              .attr("x", 5)
              .attr("y", 5)
              .append("text")
              .attr("transform", "rotate(90)")
              .attr("x", 6)
              .attr("dy", ".71em")
              .style("text-anchor", "end")
              .text("Value ($)");
              
          













      this.logout = () => {
        Accounts.logout();
      }
 
 

  
    }

  }
});