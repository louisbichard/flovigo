flovigo.directive('fvTaskByDate', function(
    $rootScope,
    TaskService
) {
    return {
        restrict: 'E',
        templateUrl: 'components/task_by_date/task_by_date.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            $scope.task_group = _.chain(TaskService.get())
                .reject('is_closed')
                .groupBy('pretty_date')
                .value();
            
        }
    }
});
