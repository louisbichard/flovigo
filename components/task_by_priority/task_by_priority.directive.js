flovigo.directive('fvTaskByPriority', function(
    $rootScope,
    TaskService
) {
    return {
        restrict: 'E',
        templateUrl: 'components/task_by_priority/task_by_priority.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            $scope.task_group = _.groupBy(TaskService.get(), TaskService.groupByUrgenceAndImportance);
            
        }
    }
});
