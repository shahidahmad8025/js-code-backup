const subject1 = Number(prompt("Enter the marks obtained in subject1"));
const subject2 = Number(prompt("Enter the marks obtained in subject2"));
const subject3 = Number(prompt("Enter the marks obtained in subject3"));

const totalMarks = subject1 + subject2 + subject3;

const percentage = (totalMarks / 300) * 100;

alert("Total Marks = " + totalMarks);

alert("Percentage = " + percentage + "%");