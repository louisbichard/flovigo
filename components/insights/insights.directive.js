flovigo.directive('fvInsights', function(
    TaskService,
    $rootScope
) {
    return {
        restrict: 'E',
        templateUrl: 'components/insights/insights.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            $scope.active = _.random(0, 1);

            // Insight -> 0
            $scope.no_parent_tasks = TaskService.getTasksForAttribute(null);
        }
    }
});
