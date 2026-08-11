const subject1 = Number(prompt("Enter the marks obtained in subject1"));
const subject2 = Number(prompt("Enter the marks obtained in subject2"));
const subject3 = Number(prompt("Enter the marks obtained in subject3"));

const marksObtained = subject1 + subject2 + subject3;

const totalMarks = 300;

const percentage = (marksObtained / totalMarks) * 100;

alert("Total Marks = " + totalMarks);

alert("Percentage = " + percentage + "%");