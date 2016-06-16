flovigo.directive('fvTaskByContext', function(
    $rootScope,
    TaskService
) {
    return {
        restrict: 'E',
        templateUrl: 'components/task_by_context/task_by_context.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {
            
            $scope.task_group = TaskService.getByContext();

        }
    }
});
