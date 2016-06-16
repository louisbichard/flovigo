flovigo.directive('fvAttributesTile', function(
    $rootScope
) {
    return {
        restrict: 'E',
        templateUrl: 'components/attributes_tile/attributes_tile.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            $scope.title ="Attribute title!"
        }
    }
});
