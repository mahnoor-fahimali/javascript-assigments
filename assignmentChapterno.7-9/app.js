// 3. Write a program that takes input a name from user &
// greet the user.

var name = prompt("Enter your name:");
alert("Hello " + name + "!");

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var num = prompt("Enter a number:");

if (num === "" || num === null) {
    num = 5;
}

document.write("Multiplication table of " + num + "<br><br>");

for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

var totalMarks = 100;

var obtained1 = +prompt("Enter obtained marks in " + subject1 + ":");
var obtained2 = +prompt("Enter obtained marks in " + subject2 + ":");
var obtained3 = +prompt("Enter obtained marks in " + subject3 + ":");

var totalObtained = obtained1 + obtained2 + obtained3;
var totalMarksAll = totalMarks * 3;
var percentage = (totalObtained / totalMarksAll) * 100;

document.write("<table border='1' cellpadding='10'>");

document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject1 + "</td>");
document.write("<td>100</td>");
document.write("<td>" + obtained1 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject2 + "</td>");
document.write("<td>100</td>");
document.write("<td>" + obtained2 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject3 + "</td>");
document.write("<td>100</td>");
document.write("<td>" + obtained3 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th>Total</th>");
document.write("<th>" + totalMarksAll + "</th>");
document.write("<th>" + totalObtained + "</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<th colspan='2'>Percentage</th>");
document.write("<th>" + percentage.toFixed(2) + "%</th>");
document.write("</tr>");

document.write("</table>");

var fruits = ["banana", "apple", "mango", "kiwi"]