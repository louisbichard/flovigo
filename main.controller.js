flovigo.controller('mainController', function(
    $scope,
    $rootScope, 
    $location
) {

    $scope.openCheckIn = function() {
        console.log('open check in');
        $rootScope.$emit('shoji:toggle_shoji', {
            directive_name: 'fvCheckIn',
            id: _.random(0, 10)
        });
    };

    $scope.openReview = function() {
        $rootScope.$emit('shoji:toggle_shoji', {
            directive_name: 'fvReview',
            id: _.random(0, 10)
        });
    };

});
