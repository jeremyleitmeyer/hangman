//arrays
var words = [
  "LAUGH", "ELEPHANT",
  "SKYSCRAPER", "ORANGE",
  "UNIVERSITY", "BACKPACK",
  "LAPTOP", "PHONE",
  "AIRPLANE", "PIGEON",
  "BRIEFCASE", "ELEVATOR",
  "NEWSPAPER", "BALLOON",
  "HIGHWAY", "COFFEE",
  "WALLET", "REFRIGERATOR",
  "PHILADELPHIA", "CASTLE",
  "GLACIER", "TABLE",
  "STOOL", "SUBWAY",
  "BICYCLE", "APOCALYPSE"
 ];
var hints = [
  "Reaction to something humorous",
  "A big animal",
  "A tall structure",
  "Citrus",
  "A place of higher learning",
  "A bag you wear on your back",
  "Mobile computer",
  "Device to talk to someone far away",
  "A flying bus",
  "The rat of the sky",
  "A businessman carries their things in this",
  "Moves you between floors",
  "An almost extinct way to get the news",
  "A rubber ball of air",
  "A road highly traveled",
  "______ is the best hot drink",
  "Small holder for your money",
  "Cold storage for perishables",
  "City of brotherly love",
  "Large structure royals lived in",
  "Large floating mass of ice",
  "Surface to eat on",
  "Seat usually at a bar",
  "Underground train",
  "2 wheeled transportation",
  "The end of EVERYTHING"
];
var guessed = [];

//sections
var wrong = document.querySelector(".wrong");
var answer = document.querySelector(".answer");
var hint = document.querySelector("#hint");
var attempts = document.querySelector(".attempts");

//global random variable
var random = Math.random();

//answer word/hint
var currentHint = hints[Math.floor(random * words.length)];
var currentWord = words[Math.floor(random * words.length)];
var splitWord = currentWord.split("");
var solution = currentWord.split("").fill(" _ ");
var attemptsLeft = 7;

//disables letter buttons after 1 use
function btnPress() {
  letters = document.getElementById("letters");
  for (let letter of letters.children) {
    letter.addEventListener("click", function(e) {
      e.target.disabled = "true";
    });
  }
}

//finds if the letter pressed is correct and sends it to the answer and
//letter bank or just the letter bank if wrong

function guessLetter(letter) {
  let i = 0;
  //flag to stop correct letters from reducing attempts
  let found = false;
  //runs through the index to match correct letter and index
  while (i >= 0) {
    i = splitWord.indexOf(letter, i);
    if (i >= 0) {
      //flag
      found = true;
      solution[i] = letter;
      i++;
    }
  }

  //pushes used letters to word bank
  guessed.push(letter);
  //reduces attempts left
  if (!found) attemptsLeft--;

  //text insertion
  wrong.innerHTML = guessed.sort().join(",  ");
  answer.innerHTML = solution.join("");
  hint.innerHTML = "Hint: " + currentHint;
  attempts.innerHTML = "Guesses remaining: " + attemptsLeft;

  //reset and win/lose alerts
  var splitWordFinal = splitWord.toString();
  var solutionFinal = solution.toString();

  // setTimeout(function() {
    if (solutionFinal === splitWordFinal) {
    	console.log("win")
      document.querySelector("#winModal").classList.remove("hidden")
    }
    if (attemptsLeft === 0) {
    	console.log("lose")
      document.querySelector("#loseModal").classList.remove("hidden")
    }
  // }, 500);
}

function playAgain() {
  document.querySelector("#winModal").classList.add("hidden")
  document.querySelector("#loseModal").classList.add("hidden")
	window.location.reload();
}


window.onload = btnPress();
window.onload = guessLetter();

//                                  ¯\_(ツ)_/¯
