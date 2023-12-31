
"use strict";

console.log('helloooo');

function masterKey() {

  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("masterKeyValue").value;

  if ( x === "11062022" || x === "110622") {
    document.getElementById('question1').style.display = "block";
    document.getElementById('masterKey').style.display = "none";
  } else {
    text = "Not quite. Try again.";
    document.getElementById("demo").innerHTML = text;
  }

  const secondParagraph = document.getElementById('paragraph1');

  const textToTypeSecond = parseTextContent(secondParagraph.getAttribute('data-text'));
  typeWriter(secondParagraph, textToTypeSecond);
}


function question1() {

  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("firstValue").value;

  if ( x === "rice" || x === "Rice") {
    document.getElementById('question2').style.display = "block";
    document.getElementById('question1').style.display = "none";
  } else {
    text = "Not quite numbar wan, huh... Try again";
    document.getElementById("demo1").innerHTML = text;
  }
}

function question2() {

  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("secondValue").value;

  if ( x === "popsicles" || x === "Popsicles") {
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

  if ( x === "kintsugi" || x === "Kintsugi") {
    document.getElementById('question4').style.display = "block";
    document.getElementById('question3').style.display = "none";
  } else {
    text = "Nope. Try again. Use the internet";
    document.getElementById("demo3").innerHTML = text;
  }
}

function question4() {

  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("fourthValue").value;

  if ( x === "coude a coude" || x === "coude à coude" || x === "Coude a coude") {
    document.getElementById('question5').style.display = "block";
    document.getElementById('question4').style.display = "none";
  } else {
    text = "Watchu talkin' about... nope";
    document.getElementById("demo4").innerHTML = text;
  }
}

function question5() {

  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("fifthValue").value;

  if ( x === "my nourishment" || x === "My nourishment" || x === "My Nourishment") {
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

  if ( x === "beauty and terror" || x === "Beauty and Terror") {
    document.getElementById('question7').style.display = "block";
    document.getElementById('question6').style.display = "none";
  } else {
    text = "Maybe look this one up...";
    document.getElementById("demo6").innerHTML = text;
  }
}


function question7() {

  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("seventhValue").value;

  if ( x === "dreams" || x === "Dreams") {
    document.getElementById('endText').style.display = "block";
    document.getElementById('question7').style.display = "none";
  } else {
    text = "Maybe you need to look this one up...";
    document.getElementById("demo7").innerHTML = text;
  }
}

const typewriterElements = document.querySelectorAll('.typewriter-text');

        typewriterElements.forEach((typewriterElement) => {
            const textToType = parseTextContent(typewriterElement.getAttribute('data-text'));

            // Set the initial text content to an empty string
            typewriterElement.innerHTML = '';

            // Function to simulate smooth typing effect
            function typeWriter() {
                let paragraphIndex = 0;
                let i = 0;
                const speed = 50; // Adjust this value for typing speed

                function type() {
                    const currentChar = textToType[paragraphIndex][i];
                    if (currentChar === '<') {
                        // Handle HTML tag
                        let tag = currentChar;
                        i++;

                        while (i < textToType[paragraphIndex].length && textToType[paragraphIndex][i] !== '>') {
                            tag += textToType[paragraphIndex][i];
                            i++;
                        }

                        tag += '>';
                        typewriterElement.innerHTML += tag;
                    } else {
                        // Handle regular character
                        typewriterElement.innerHTML += currentChar;
                    }

                    i++;

                    // Scroll into view after the last character is added
                    if (i === textToType[paragraphIndex].length) {
                        paragraphIndex++;
                        i = 0;
                        if (paragraphIndex < textToType.length) {
                            typewriterElement.innerHTML += '<br>';
                            typewriterElement.scrollIntoView({ behavior: 'smooth' });
                        }
                    }

                    // Check if all characters are typed
                    if (paragraphIndex < textToType.length) {
                        setTimeout(type, speed);
                    }
                }

                type();
            }

            // Call the function to start the smooth typewriter effect
            typeWriter();
        });

        // Function to parse HTML tags and text content
        function parseTextContent(text) {
            const parsedText = [];
            let currentString = '';
            let isInTag = false;

            for (const char of text) {
                if (char === '<') {
                    isInTag = true;
                    currentString += char;
                } else if (char === '>') {
                    isInTag = false;
                    currentString += char;
                } else if (char === ' ' && isInTag) {
                    currentString += char;
                } else if (char === '<' && currentString.trim() !== '') {
                    parsedText.push(currentString);
                    currentString = char;
                } else {
                    currentString += char;
                }
            }

            if (currentString.trim() !== '') {
                parsedText.push(currentString);
            }

            return parsedText;
        }

