angular.module('socially').filter('timetransform', function () {
  return function (data) {
   
    return (moment(data).format('h')*60)-100;

  }
});