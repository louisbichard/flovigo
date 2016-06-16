flovigo.directive('fvTaskByDate', function(
    $rootScope,
    TaskService
) {
    return {
        restrict: 'E',
        templateUrl: 'components/task_by_date/task_by_date.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            $scope.task_group = _.groupBy(TaskService.get(), 'pretty_date');
            
        }
    }
});
