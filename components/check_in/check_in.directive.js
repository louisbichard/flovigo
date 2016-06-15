flovigo.directive('fvCheckIn', function(
    TaskService,
    $rootScope
) {
    return {
        restrict: 'E',
        templateUrl: 'components/check_in/check_in.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            console.log('loaded check in !')

            var tasks = angular.copy(TaskService.get())
            $scope.tasks = tasks.splice(0, 3);
        }
    }
});
