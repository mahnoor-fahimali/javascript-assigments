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

