flovigo.directive('fvFocusArea', function() {
    return {
        restrict: 'E',
        templateUrl: 'components/focus_area/focus_area.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

                $scope.focus_areas = [{
                    title: "Focus area 1",
                    score: 4
                },{
                    title: "Focus area 2",
                    score: 6
                },{
                    title: "Focus area 3",
                    score: 7
                }];
        }
    }
});
