flovigo.directive('fvTaskDetail', function(
    $rootScope,
    TaskService,
    attributeService
) {
    return {
        restrict: 'E',
        templateUrl: 'components/task_detail/task_detail.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            $scope.task = TaskService.get($scope.$parent._shoji.id);

            $scope.attributes = attributeService.get();
            
        }
    }
});
