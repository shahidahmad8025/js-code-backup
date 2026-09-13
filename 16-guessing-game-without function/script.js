alert("Let's play guessing game");

alert("Guess any number between 1-10. If it matches the secret number than you will win the game");

const secretNumber = 7;

alert("You can attempt three times. If you failed in all three attempts than you will loss the game");
alert("1st Attempt");

let guess = Number(prompt("Enter any number between 1-10."));

if (guess === secretNumber) {
alert("You won the game");
} else {
alert("Game over");
}

alert("2nd Attempt");
guess = Number(prompt("Enter any number between 1-10."));

if (guess === secretNumber) {
alert("You won the game");
} else {
alert("Game over");
}


alert("3rd Attempt");
guess = Number(prompt("Enter any number between 1-10."));

if (guess === secretNumber) {
alert("You won the game");
} else {
alert("Game over");
}
