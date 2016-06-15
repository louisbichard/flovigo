flovigo.directive('fvTabs', function(

) {
    return {
        restrict: 'E',
        templateUrl: 'components/tabs/tabs.html',
        scope: {
            active: '=',
            headers: '='
        },
        transclude: true,
        link: function($scope, $elem, $attrs, $ctrl) {

            $scope.setActive = function(idx){
                $scope.active = idx;
            };
         
        }
    }
});
