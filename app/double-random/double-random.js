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


function addNumber(button) {
    let input;
    if (button === "plus") {
        input = '+';
    }else if (button === "minus") {
        input = '-';
    }else if (button === "mult") {
        input = '*';
    }else if (button === "div") {
        input = '/';
    }else {
        input = Math.floor(Math.random()*10);
    }

    document.getElementById("math").value += input;

}

function clear() {
    document.getElementById("math").value = "";
}
