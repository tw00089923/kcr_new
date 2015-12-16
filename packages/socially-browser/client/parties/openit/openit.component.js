angular.module('socially.browser').directive('openit', function () {
  return {
    restrict: 'E',
    templateUrl: '/packages/socially-browser/client/parties/openit/openit.html',
    controllerAs: 'openitcontrol',
    controller: function ($scope, $timeout, $mdSidenav, $log) {
      
        $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    }
  }
});