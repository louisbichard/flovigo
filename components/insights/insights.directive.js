flovigo.directive('fvInsights', function(
    TaskService,
    $rootScope
) {
    return {
        restrict: 'E',
        templateUrl: 'components/insights/insights.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            $scope.active = _.random(0, 3);

            var tasks = angular.copy(TaskService.get())
            $scope.tasks = tasks.splice(0, 3);
        }
    }
});
