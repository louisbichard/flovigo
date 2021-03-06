flovigo.directive('fvCore', function(
    $rootScope,
    coreService
) {
    return {
        restrict: 'E',
        templateUrl: 'components/core/core.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            $scope.showCoreDetails = function(){
                $rootScope.$emit('shoji:toggle_shoji', {
                    directive_name: 'fvCoreDetail',
                    id: _.random(0, 10)
                });
            };

            $scope.core_skills = _.orderBy(coreService.get(), 'score');
        }
    }
});
