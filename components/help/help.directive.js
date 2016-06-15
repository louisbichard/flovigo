flovigo.directive('fvHelp', function(

) {
    return {
        restrict: 'E',
        templateUrl: 'components/help/help.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            console.log('help');

        }
    }
});
