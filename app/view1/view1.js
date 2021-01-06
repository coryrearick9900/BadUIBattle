'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
  randomize();
  clearText();
}]);

function randomize() {
  const values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let button1 = document.getElementById("one");
  let button2 = document.getElementById("two");
  let button3 = document.getElementById("three");
  let button4 = document.getElementById("four");
  let button5 = document.getElementById("five");
  let button6 = document.getElementById("six");

  let arrayOfItems = [button1, button2, button3, button4, button5, button6];

  // console.log("here");

  for (let i = 0; i < arrayOfItems.length; i++) {
    let randomNumber = Math.random()*62;
    arrayOfItems[i].innerHTML = values.charAt(randomNumber);
  }


}


// This funciton adds the value of the button to the text field
function enterValue(buttonID) {
  const letter = document.getElementById(buttonID).innerHTML;
  console.log("Entering " + letter);
  document.getElementById("Name_I").value += letter;


}


// Function to clear the text field value to blank
function clearText() {
  console.log("clearing?");

  document.getElementById("Name_I").value = "";


}