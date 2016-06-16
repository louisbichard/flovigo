flovigo.directive('fvShoji', function(
    $rootScope,
    $timeout,
    $compile
) {
    return {
        restrict: 'E',
        templateUrl: 'components/shoji/shoji.html',
        scope: {},
        link: function($scope, $elem, $attrs, $ctrl) {

            $scope.hide_shoji = true;

            $scope.hideShoji = function() {
                $scope.hide_shoji = true;
            };

            $scope.showShoji = function() {
                $scope.hide_shoji = false;
            };

            $rootScope.$on('shoji:toggle_shoji', function(event, vals) {
                shoji_module.init(vals);
            });


            var shoji_module = {
                
                shoji_config: {
                    'fvTaskDetail': {
                        title: 'Task detail',
                        icon: 'check-circle-o'
                    },
                    'fvHelp': {
                        title: 'Help',
                        icon: 'question-mark'
                    },
                    'fvCoreDetail': {
                        title: 'Core',
                        icon: 'road'
                    }
                },

                init: function(vals) {
                    shoji_module.setupShojiTitle(vals);
                    shoji_module.compileDirective(vals.directive_name);                    
                },

                setupShojiTitle: function(vals) {
                    $scope.title = _.get(shoji_module, '.shoji_config['+ vals.directive_name + '].title') || "Detail";
                    $scope.id = vals.id;
                    $scope.icon = _.get(shoji_module, '.shoji_config['+ vals.directive_name + '].icon') || "check";
                },

                compileDirective: function(directive_name) {

                    var scope = $rootScope.$new(true);
                    scope._shoji = {
                        id: $scope.id
                    }

                    directive_name = _.kebabCase(directive_name);

                    var compiled_directive = $compile("<" + directive_name + ">" + "</" + directive_name + ">")(scope);

                    $timeout(function() {
                        $('.shoji_component .shoji_content').html(compiled_directive);
                        $scope.showShoji();
                    });

                }
            };

        }
    }
});
