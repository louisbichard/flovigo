flovigo.directive('fvWidget', function(

) {
    return {
        restrict: 'E',
        templateUrl: 'components/widget/widget.html',
        scope: {
            title: '@'
        },
        transclude: true,
        link: function($scope, $elem, $attrs, $ctrl) {
         
        }
    }
});
