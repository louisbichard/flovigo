flovigo.directive('fvCore', function(
    $rootScope
) {
    return {
        restrict: 'E',
        templateUrl: 'components/core/core.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            $scope.showCoreDetails = function(){
                alert('show core details');
            };

            $scope.core_skills = _.orderBy([{
                title: "Wellbeing",
                score: 2
            },{
                title: "Wealth",
                score: 4
            },{
                title: "Finance",
                score: 8
            },{
                title: "Career",
                score: 9
            },{
                title: "Personal",
                score: 10
            },{
                title: "Love",
                score: 1
            }], 'score');
        }
    }
});
