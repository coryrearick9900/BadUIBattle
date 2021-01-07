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

function clearText_d() {
    document.getElementById("math").value = "";
}

function evaluateMathBox() {
    let expr = document.getElementById("math").value;
    let final = eval(expr);

    if (final >= 32 && final <= 126) {
        let letter = String.fromCharCode(final);
        document.getElementById("namebox").value += letter;
        clearText_d();
    }

}


function backspace_d() {
    let input = "";
    let text = document.getElementById("namebox").value;

    for (let i = 0; i < text.length-1; i++) {
        input += text.charAt(i);
        // console.log(input);
    }

    document.getElementById("namebox").value = input;
}

function space() {
    document.getElementById("namebox").value += " ";
}
