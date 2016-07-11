flovigo.directive('fvAttributeDetail', function(
    $rootScope,
    TaskService,
    attributeService
) {
    return {
        restrict: 'E',
        templateUrl: 'components/attribute_detail/attribute_detail.html',
        scope: {
            attribute: '@'
        },
        link: function($scope, $elem, $attrs, $ctrl) {

            if(!$scope.attribute) $scope.attribute = attributeService.get($scope.$parent._shoji.id) 

            $scope.tasks = TaskService.getTasksForAttribute($scope.attribute.id);

        }
    }
});
