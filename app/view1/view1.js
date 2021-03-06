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
  clearText_s();
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
  if (buttonID !== "space") {
    const letter = document.getElementById(buttonID).innerHTML;
    // console.log("Entering " + letter);
    document.getElementById("Name_I").value += letter;
  }else {
    document.getElementById("Name_I").value += ' ';

  }


}


// Function to clear the text field value to blank
function clearText_s() {
  // console.log("clearing?");

  document.getElementById("Name_I").value = "";


}

function backspace_s() {
  let input = "";
  let text = document.getElementById("Name_I").value;

  for (let i = 0; i < text.length-1; i++) {
    input += text.charAt(i);
  }

  document.getElementById("Name_I").value = input;
}

function chancetime() {
    let letterinput = document.getElementById("letterin").value;
    const values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    if (letterinput !== "") {
      const chance = Math.random() * 10;
      console.log(chance);

      if (chance < 2.5) {
        document.getElementById("Name_I").value += letterinput;
      } else {
        let anotherchance = Math.floor(Math.random() * 62);
        document.getElementById("Name_I").value += values.charAt(anotherchance);
      }

      document.getElementById("letterin").value = "";
    }
}

