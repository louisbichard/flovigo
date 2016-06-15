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

            $scope.tasks = TaskService.get().splice(0, 3);
        }
    }
});
