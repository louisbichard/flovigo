flovigo.directive('fvCheckIn', function(
    $rootScope
) {
    return {
        restrict: 'E',
        templateUrl: 'components/check_in/check_in.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            console.log('loaded check in !')
        }
    }
});
