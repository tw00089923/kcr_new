angular.module('socially').filter('effect', function () {
  return function () {
   
   var a = work.goodnumber , b = work.standtime ,c = work.worktime , d = work.othertime ;



  	 return (100*a*b)/(c-d) +  ' % ';

  }
});