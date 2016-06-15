flovigo.directive('fvTaskList', function(
    $rootScope,
    TaskService
) {
    return {
        restrict: 'E',
        templateUrl: 'components/task_list/task_list.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            $scope.active = 0;

            $scope.$watch('active', function() {
                if ($scope.active === 0) {
                    $scope.task_group = _.groupBy(TaskService.get(), TaskService.groupByUrgenceAndImportance);
                } else {
                    $scope.task_group = _.groupBy(TaskService.get(), 'pretty_date');
                }
            });

        }
    }
});
