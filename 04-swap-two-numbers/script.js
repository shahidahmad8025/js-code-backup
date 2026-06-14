alert("Enter two numbers to swap them");

let number1 = Number(prompt("Enter 1st number"));

let number2 = Number(prompt("Enter 2nd number"));

alert("The data stored in variables number1 and number2 before swapping: " + number1 + " " + number2);
 
let temporary;

temporary = number1;

number1 = number2;

number2 = temporary;

alert("The data stored in variables number1 and number2 after swapping: " + number1 + " " + number2);
