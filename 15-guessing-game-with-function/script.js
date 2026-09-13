alert("Let's play guessing game");

alert("Guess any number between 1-10. If it matches the secret number than you will win the game");

const secretNumber = 7;

alert("1st Attempt");

let guess = Number(prompt("Enter any number between 1-10."));


function checkGuess(guess) {
if (guess === secretNumber) {
alert("You won the game");
} else {
alert("Game Over");
}
}

checkGuess(guess);

alert("2nd Attempt");

guess = Number(prompt("Enter any number between 1-10."));
checkGuess(guess);

alert("3rd Attempt");

guess = Number(prompt("Enter any number between 1-10."));
checkGuess(guess);

