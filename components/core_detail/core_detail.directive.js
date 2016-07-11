flovigo.directive('fvCoreDetail', function(
    attributeService,
    coreService
) {
    return {
        restrict: 'E',
        templateUrl: 'components/core_detail/core_detail.html',
        scope: {
            core: '@'
        },
        link: function($scope, $elem, $attrs, $ctrl) {

            console.log($scope.$parent._shoji.id);

            if(!$scope.core) $scope.core = coreService.get($scope.$parent._shoji.id)             

            console.log($scope.core);

            $scope.attributes = attributeService.getAttributesForCore($scope.core.id);


        }
    }
});
