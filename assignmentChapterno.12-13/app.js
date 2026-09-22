

// ==========================================================
// ASSIGNMENT # 12-13
// JAVASCRIPT
// IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS
// ==========================================================


// ==========================================================
// QUESTION 1
// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter.
// Hint: ASCII codes:- A=65, Z=90, a=97, z=122.
// ==========================================================

var character = prompt(`Enter a character:`);

var ascii = character.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    document.write(`<h3>Question 1</h3>`);
    document.write(`The given character is a number: ${character}<br><br>`);
}
else if (ascii >= 65 && ascii <= 90) {
    document.write(`<h3>Question 1</h3>`);
    document.write(`The given character is an uppercase letter: ${character}<br><br>`);
}
else if (ascii >= 97 && ascii <= 122) {
    document.write(`<h3>Question 1</h3>`);
    document.write(`The given character is a lowercase letter: ${character}<br><br>`);
}
else {
    document.write(`<h3>Question 1</h3>`);
    document.write(`The given character is not a number or an English letter.<br><br>`);
}


// ==========================================================
// QUESTION 2
// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// ==========================================================

var number1 = Number(prompt(`Enter first integer:`));
var number2 = Number(prompt(`Enter second integer:`));

document.write(`<h3>Question 2</h3>`);

if (number1 > number2) {
    document.write(`The larger number is ${number1}<br><br>`);
}
else if (number2 > number1) {
    document.write(`The larger number is ${number2}<br><br>`);
}
else {
    document.write(`Both numbers are equal.<br><br>`);
}


// ==========================================================
// QUESTION 3
// Write a program that takes input a number from user & state
// whether the number is positive, negative or zero.
// ==========================================================

var number = Number(prompt(`Enter a number:`));

document.write(`<h3>Question 3</h3>`);

if (number > 0) {
    document.write(`The number ${number} is positive.<br><br>`);
}
else if (number < 0) {
    document.write(`The number ${number} is negative.<br><br>`);
}
else {
    document.write(`The number is zero.<br><br>`);
}


// ==========================================================
// QUESTION 4
// Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise.
// ==========================================================

var character = prompt(`Enter a character to check whether it is a vowel:`);

var result;

if (
    character == `a` ||
    character == `e` ||
    character == `i` ||
    character == `o` ||
    character == `u` ||
    character == `A` ||
    character == `E` ||
    character == `I` ||
    character == `O` ||
    character == `U`
) {
    result = true;
}
else {
    result = false;
}

document.write(`<h3>Question 4</h3>`);
document.write(`Is ${character} a vowel? ${result}<br><br>`);


// ==========================================================
// QUESTION 5
// Write a program that
//
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password.
// c. Validate the two passwords:
//
// i. Check if user has entered password. If not, then give
// message "Please enter your password".
//
// ii. Check if both passwords are same. If they are same,
// show message "Correct! The password you entered matches
// the original password". Show "Incorrect password" otherwise.
// ==========================================================

var correctPassword = `abc123`;

var userPassword = prompt(`Enter your password:`);

document.write(`<h3>Question 5</h3>`);

if (userPassword == `` || userPassword == null) {
    document.write(`Please enter your password.<br><br>`);
}
else if (userPassword == correctPassword) {
    document.write(`Correct! The password you entered matches the original password.<br><br>`);
}
else {
    document.write(`Incorrect password.<br><br>`);
}


// ==========================================================
// QUESTION 6
// This if/else statement does not work. Try to fix it:
//
// var greeting;
// var hour = 13;
//
// if (hour < 18) {
//     greeting = "Good day";
// else
//     greeting = "Good evening";
// }
// ==========================================================

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = `Good day`;
}
else {
    greeting = `Good evening`;
}

document.write(`<h3>Question 6</h3>`);
document.write(`${greeting}<br><br>`);


// ==========================================================
// QUESTION 7
// Write a program that takes time as input from user in
// 24 hours clock format like: 1900 = 7pm.
// Implement the following case using if, else & else if:
//
// 0000 - 1200  = Good morning
// 1200 - 1700  = Good afternoon
// 1700 - 2100  = Good evening
// 2100 - 2359  = Good night
// ==========================================================

var time = Number(prompt(`Enter time in 24 hours format (e.g. 1900):`));

document.write(`<h3>Question 7</h3>`);

if (time >= 0 && time < 1200) {
    document.write(`Good morning<br><br>`);
}
else if (time >= 1200 && time < 1700) {
    document.write(`Good afternoon<br><br>`);
}
else if (time >= 1700 && time < 2100) {
    document.write(`Good evening<br><br>`);
}
else if (time >= 2100 && time <= 2359) {
    document.write(`Good night<br><br>`);
}
else {
    document.write(`Invalid time. Please enter a time between 0000 and 2359.<br><br>`);
}

