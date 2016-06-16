flovigo.directive('fvReview', function(
    $rootScope,
    TaskService
) {
    return {
        restrict: 'E',
        templateUrl: 'components/review/review.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {
            
            $scope.tasks = TaskService.get();

        }
    }
});
