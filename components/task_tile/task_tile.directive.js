flovigo.directive('fvTaskTile', function(
    $rootScope
) {
    return {
        restrict: 'E',
        templateUrl: 'components/task_tile/task_tile.html',
        scope: {
            task: '='
        },
        transclude: true,
        link: function($scope, $elem, $attrs, $ctrl) {
            $scope.taskClick = function() {
                $rootScope.$emit('shoji:toggle_shoji', {
                    directive_name: 'fvTaskDetail',
                    id: $scope.task.id
                });
            };
        }
    }
});
