let box1 = Number(prompt("Enter the first number:"));
let box2 = Number(prompt("Enter the second number:"));

alert("Numbers before swapping: " + box1 + " " + box2);

let box3 = box2;

box2 = box1;

box1 = box3;

alert("Numbers after swapping: " + box1 + " " + box2);

