flovigo.directive('fvAttributesTile', function(
    $rootScope
) {
    return {
        restrict: 'E',
        templateUrl: 'components/attributes_tile/attributes_tile.html',
        scope: {
            attribute: '='
        },
        link: function($scope, $elem, $attrs, $ctrl) {
        }
    }
});
