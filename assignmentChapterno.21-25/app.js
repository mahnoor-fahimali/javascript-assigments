// Q.1
// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;

document.write("Hello " + fullName + "<br><br>");


// Q.2
// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser.

var mobileModel = prompt("Enter your favorite mobile phone model:");

document.write("My favorite mobile phone model is: " + mobileModel + "<br>");
document.write("Length of input: " + mobileModel.length + "<br><br>");


// Q.3
// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.

var word = "Pakistani";

var index = word.indexOf("n");

document.write("Index of 'n': " + index + "<br><br>");


// Q.4
// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var word = "Hello World";

var index = word.lastIndexOf("l");

document.write("Last index of 'l': " + index + "<br><br>");


// Q.5
// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var word = "Pakistani";

var character = word.charAt(3);

document.write("Character at 3rd index: " + character + "<br><br>");


// Q.6
// Repeat Q1 using string concat() method.

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName.concat(" ", lastName);

document.write("Hello " + fullName + "<br><br>");


// Q.7
// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var city = "Hyderabad";

var newCity = city.replace("Hyder", "Islam");

document.write(newCity + "<br><br>");


// Q.8
// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

var message = "Ali and Sami are best friends. They play cricket and football together.";

var newMessage = message.replace(/and/g, "&");

document.write(newMessage + "<br><br>");


// Q.9
// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var value = "472";

document.write("Value: " + value + "<br>");
document.write("Type: " + typeof value + "<br><br>");

var number = Number(value);

document.write("Value: " + number + "<br>");
document.write("Type: " + typeof number + "<br><br>");


// Q.10
// Write a program that takes user input. Convert and
// show the input in capital letters.

var input = prompt("Enter some text:");

var capitalLetters = input.toUpperCase();

document.write(capitalLetters + "<br><br>");


// Q.11
// Write a program that takes user input. Convert and
// show the input in title case.

var input = prompt("Enter some text:");

var words = input.toLowerCase().split(" ");

for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}

var titleCase = words.join(" ");

document.write(titleCase + "<br><br>");


// Q.12
// Write a program that converts the variable num to string.
// var num = 35.36;
// Remove the dot to display “3536” display in your browser.

var num = 35.36;

var numString = num.toString();

var result = numString.replace(".", "");

document.write(result + "<br><br>");


// Q.13
// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.

var username = prompt("Enter your username:");

if (
    username.indexOf("@") !== -1 ||
    username.indexOf(".") !== -1 ||
    username.indexOf(",") !== -1 ||
    username.indexOf("!") !== -1
) {
    alert("Please enter a valid username.");
} else {
    alert("Username is valid.");
}


// Q.14
// You have an array
// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// Write a program to enable “search by user input” in an array.
// Perform case insensitive search.

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var item = prompt("Enter an item to search:");

var found = false;

for (var i = 0; i < A.length; i++) {

    if (A[i].toLowerCase() === item.toLowerCase()) {
        found = true;
        break;
    }
}

if (found === true) {
    alert(item + " is available in the list.");
} else {
    alert(item + " is not available in the list.");
}


// Q.15
// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.

var password = prompt("Enter your password:");

var hasAlphabet = false;
var hasNumber = false;

// Check alphabets and numbers
for (var i = 0; i < password.length; i++) {

    var code = password.charCodeAt(i);

    // A-Z or a-z
    if (
        (code >= 65 && code <= 90) ||
        (code >= 97 && code <= 122)
    ) {
        hasAlphabet = true;
    }

    // 0-9
    if (code >= 48 && code <= 57) {
        hasNumber = true;
    }
}

// Check if password starts with a number
var firstCode = password.charCodeAt(0);

var startsWithNumber = firstCode >= 48 && firstCode <= 57;

if (
    hasAlphabet === true &&
    hasNumber === true &&
    startsWithNumber === false &&
    password.length >= 6
) {
    alert("Password is valid.");
} else {
    alert("Please enter a valid password.");
}


// Q.16
// Write a program to convert the following string to an
// array using string split method.
// var university = "University of Karachi";
// Display the elements of array in your browser.

var university = "University of Karachi";

var universityArray = university.split(" ");

for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");
}

document.write("<br>");


// Q.17
// Write a program to display the last character of a user input.

var input = prompt("Enter some text:");

var lastCharacter = input.charAt(input.length - 1);

document.write("Last character: " + lastCharacter + "<br><br>");


// Q.18
// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var sentence = "The quick brown fox jumps over the lazy dog";

var words = sentence.toLowerCase().split(" ");

var count = 0;

for (var i = 0; i < words.length; i++) {

    if (words[i] === "the") {
        count++;
    }
}

document.write("The word 'the' occurs " + count + " time(s).");