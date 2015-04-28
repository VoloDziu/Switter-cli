angular.module('tweetsToSoftware')
    .directive('tweetsWidget', function($timeout, NotificationService) {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: 'templates/tweetsWidget.html',
            scope: {},
            controller: function($scope) {
                $scope.data = NotificationService.get();

                NotificationService.listen();
            }
        }
    });