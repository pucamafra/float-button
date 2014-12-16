angular.module('floatButton', [])

.directive('floatButton', function() {
    return  {
        restrict: 'E',
        scope: {
            icon: '@',
            href:'@'
        },
        template: ' <div class="float-button" ng-show="!ionic.Platform.isIOS()"><span class="height-fix"><a href="{{href}}"class="content"><i class="{{icon}}"> </i></a></span></div>'

    };
})

