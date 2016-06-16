flovigo.directive('fvAttributeDetail', function(
    $rootScope,
    TaskService
) {
    return {
        restrict: 'E',
        templateUrl: 'components/attribute_detail/attribute_detail.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {
            
            $scope.title = [
                'Get better at communicating',
                'Go to more conferences',
                'Meditate more',
                'Spend more time with family'
            ][_.random(0, 3)]


            $scope.task = TaskService.get()[0];

        }
    }
});
