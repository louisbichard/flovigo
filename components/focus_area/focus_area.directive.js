flovigo.directive('fvFocusArea', function(
    $rootScope,
    attributeService
) {
    return {
        restrict: 'E',
        templateUrl: 'components/focus_area/focus_area.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            $scope.showAttributeDetails = function() {
                $rootScope.$emit('shoji:toggle_shoji', {
                    directive_name: 'fvAttributeDetail',
                    id: _.random(0, 10)
                });
            };

            $scope.focus_areas = _.filter(attributeService.get(), 'is_focus');
        }
    }
});
