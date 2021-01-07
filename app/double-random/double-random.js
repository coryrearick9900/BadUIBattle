'use strict';

angular.module('myApp.double-random', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/double-random', {
            templateUrl: 'double-random/double-random.html',
            controller: 'DoubleRandomController'
        });
    }])

    .controller('DoubleRandomController', [function() {

    }]);
