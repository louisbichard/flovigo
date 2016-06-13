flovigo.directive('fvTaskList', function() {
    return {
        restrict: 'E',
        templateUrl: 'components/task_list/task_list.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            $scope.tasks = [{
                title: "A new task",                
                date: moment().format('DD-MM-YYYY')
            }, {
                title: "A new task 2",                
                date: moment().format('DD-MM-YYYY')
            },{
                title: "A new task 2",                
                date: moment().format('DD-MM-YYYY')
            },{
                title: "A new task 2",                
                date: moment().format('DD-MM-YYYY')
            },{
                title: "A new task 2",                
                date: moment().format('DD-MM-YYYY')
            },{
                title: "A new task 2",                
                date: moment().format('DD-MM-YYYY')
            },{
                title: "A new task 2",                
                date: moment().format('DD-MM-YYYY')
            },{
                title: "A new task 2",                
                date: moment().format('DD-MM-YYYY')
            },{
                title: "A new task 2",                
                date: moment().format('DD-MM-YYYY')
            }];
        }
    }
});
