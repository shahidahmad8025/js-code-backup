/*
const marks = Number(prompt("Enter your marks"));

if (marks >= 90) {
alert("A Grade");
} else if (marks >= 60) {
alert("B Grade");
} else if (marks >= 40) {
alert("C Grade");
} else {
alert("We appreciate your efforts.Try again next time, you will succeed In sha Allah");
}

*/

let boxA = 4;

let boxB = 8;

let boxC = boxB;  


boxB = boxA; 


boxA = boxC;

alert(boxA);

alert(boxB);