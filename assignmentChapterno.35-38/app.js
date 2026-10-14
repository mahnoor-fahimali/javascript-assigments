
// 1. Display Current Date and Time

function showDateTime() {
    var date = new Date();
    document.write(date);
}

showDateTime();


// 2. Greet User with Full Name

function greetUser(firstName, lastName) {
    alert("Hello " + firstName + " " + lastName);
}

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

greetUser(firstName, lastName);


// 3. Add Two Numbers and Return the Sum

function addNumbers(num1, num2) {
    return num1 + num2;
}

var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");

var sum = addNumbers(num1, num2);
document.write("Sum: " + sum);


// 4. Calculator

function calculator(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    }
    else if (operator === "-") {
        return num1 - num2;
    }
    else if (operator === "*") {
        return num1 * num2;
    }
    else if (operator === "/") {
        return num1 / num2;
    }
    else {
        return "Invalid operator";
    }
}

var a = +prompt("Enter first number:");
var b = +prompt("Enter second number:");
var op = prompt("Enter operator (+, -, *, /):");

document.write(calculator(a, b, op));


// 5. Square of a Number

function square(num) {
    document.write("Square: " + num * num);
}

square(5);


// 6. Factorial of a Number

function factorial(num) {
    var fact = 1;

    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }

    document.write("Factorial: " + fact);
}

factorial(5);


// 7. Display Counting from Start to End

function counting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}

var start = +prompt("Enter starting number:");
var end = +prompt("Enter ending number:");

counting(start, end);


// 8. Nested Function Example

function calculate(num) {
    function double(value) {
        return value * 2;
    }

    document.write("Double: " + double(num));
}

calculate(5);


// 9. Area of a Rectangle

function area(width, height) {
    document.write("Area: " + width * height + "<br>");
}

area(5, 10);

var w = 6;
var h = 4;

area(w, h);


// 10. Check Palindrome

function palindrome(str) {
    var reverse = "";

    for (var i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }

    if (str === reverse) {
        document.write("Palindrome");
    }
    else {
        document.write("Not a palindrome");
    }
}

palindrome("madam");


// 11. Capitalize First Letter of Every Word

function capitalizeWords(str) {
    var words = str.split(" ");

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase()
                 + words[i].slice(1);
    }

    document.write(words.join(" "));
}

capitalizeWords("hello world");


// 12. Find the Longest Word

function longestWord(str) {
    var words = str.split(" ");
    var longest = "";

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    document.write("Longest word: " + longest);
}

longestWord("Web Development Tutorial");


// 13. Count Occurrences of a Character

function countLetter(str, letter) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }

    document.write("Occurrences: " + count);
}

countLetter("JSResourceS.com", "o");


// 14. Calculate Circumference and Area of a Circle

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("Circumference: " + circumference + "<br>");
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    document.write("Area: " + area);
}

calcCircumference(5);
calcArea(5);
