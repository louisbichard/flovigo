flovigo.directive('fvTaskList', function(
    $rootScope
) {
    return {
        restrict: 'E',
        templateUrl: 'components/task_list/task_list.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            $scope.active = 0;
        }
    }
});
