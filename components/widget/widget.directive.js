flovigo.directive('fvWidget', function(
    $rootScope
) {
    return {
        restrict: 'E',
        templateUrl: 'components/widget/widget.html',
        scope: {
            title: '@',
            help: '@'
        },
        transclude: true,
        link: function($scope, $elem, $attrs, $ctrl) {

            $scope.openHelp = function() {
                $rootScope.$emit('shoji:toggle_shoji', {
                    directive_name: 'fvHelp',
                    id: $scope.help
                });
            };
        }
    }
});
