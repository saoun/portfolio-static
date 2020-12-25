"use strict";

console.log('helloooo');

function masterKey() {

  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("masterKeyValue").value;

  if ( x === "patience" || x === "Patience") {
    document.getElementById('question1').style.display = "block";
    document.getElementById('masterKey').style.display = "none";
  } else {
    text = "Not quite. Try again.";
    document.getElementById("demo").innerHTML = text;
  }
}


function question1() {

  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("firstValue").value;

  if ( x === "survival" || x === "Survival") {
    document.getElementById('question2').style.display = "block";
    document.getElementById('question1').style.display = "none";
  } else {
    text = "Try again, Chamoun...";
    document.getElementById("demo1").innerHTML = text;
  }
}

function question2() {

  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("secondValue").value;

  if ( x === "death" || x === "Death") {
    document.getElementById('question3').style.display = "block";
    document.getElementById('question2').style.display = "none";
  } else {
    text = "tsk tsk tsk";
    document.getElementById("demo2").innerHTML = text;
  }
}

function question3() {

  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("thirdValue").value;

  if ( x === "the torment of saint anthony" || x === "the torment of Saint Anthony" || x === "The torment of Saint Anthony") {
    document.getElementById('question4').style.display = "block";
    document.getElementById('question3').style.display = "none";
  } else {
    text = "Nope. Try again.";
    document.getElementById("demo3").innerHTML = text;
  }
}

function question4() {

  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("fourthValue").value;

  if ( x === "21" || x === "november 21") {
    document.getElementById('question5').style.display = "block";
    document.getElementById('question4').style.display = "none";
  } else {
    text = "Watchu talkin' about...";
    document.getElementById("demo4").innerHTML = text;
  }
}

function question5() {

  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("fifthValue").value;

  if ( x === "lantern" || x === "Lantern" || x === "lantern consciousness") {
    document.getElementById('question6').style.display = "block";
    document.getElementById('question5').style.display = "none";
  } else {
    text = "Hmmm... are you sure though?";
    document.getElementById("demo5").innerHTML = text;
  }
}

function question6() {

  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("sixthValue").value;

  if ( x === "dreams" || x === "Dreams") {
    document.getElementById('endText').style.display = "block";
    document.getElementById('question6').style.display = "none";
  } else {
    text = "Maybe you need to look this one up...";
    document.getElementById("demo6").innerHTML = text;
  }
}






