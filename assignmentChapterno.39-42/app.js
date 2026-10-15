
// Q1. Write a custom function power(a, b), to calculate the value of a raised to b.

function power(a, b) {
    var result = 1;

    for (var i = 1; i <= b; i++) {
        result = result * a;
    }

    return result;
}

var a = +prompt("Enter base:");
var b = +prompt("Enter power:");

document.write("Power = " + power(a, b) + "<br><br>");


// Q2. Write a function to determine whether a year is a leap year or not.

function checkLeapYear(year) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}

var year = +prompt("Enter a year:");

document.write(checkLeapYear(year) + "<br><br>");


// Q3. Calculate area of triangle using 2 functions.

function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function triangleArea(a, b, c) {
    var S = calculateS(a, b, c);
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

    return area;
}

var a = +prompt("Enter first side:");
var b = +prompt("Enter second side:");
var c = +prompt("Enter third side:");

document.write("Area of Triangle = " + triangleArea(a, b, c) + "<br><br>");


// Q4. Calculate average and percentage using 3 functions.

function average(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function percentage(m1, m2, m3) {
    return ((m1 + m2 + m3) / 300) * 100;
}

function mainFunction() {
    var m1 = +prompt("Enter marks of Subject 1:");
    var m2 = +prompt("Enter marks of Subject 2:");
    var m3 = +prompt("Enter marks of Subject 3:");

    document.write("Average = " + average(m1, m2, m3) + "<br>");
    document.write("Percentage = " + percentage(m1, m2, m3) + "%<br><br>");
}

mainFunction();


// Q5. Create a custom function similar to indexOf for a single character.

function customIndexOf(text, character) {
    for (var i = 0; i < text.length; i++) {
        if (text[i] == character) {
            return i;
        }
    }

    return -1;
}

var text = prompt("Enter a sentence:");
var character = prompt("Enter a character to find:");

document.write("Index = " + customIndexOf(text, character) + "<br><br>");


// Q6. Write a function to delete all vowels from a sentence.

function removeVowels(sentence) {
    var result = "";

    for (var i = 0; i < sentence.length; i++) {
        var ch = sentence[i].toLowerCase();

        if (ch != "a" && ch != "e" && ch != "i" &&
            ch != "o" && ch != "u") {
            result = result + sentence[i];
        }
    }

    return result;
}

var sentence = prompt("Enter a sentence (maximum 25 characters):");

document.write("Without Vowels = " + removeVowels(sentence) + "<br><br>");


// Q7. Count occurrences of two vowels in succession using switch.

function countVowelPairs(text) {
    var count = 0;

    for (var i = 0; i < text.length - 1; i++) {
        var ch = text[i].toLowerCase();
        var next = text[i + 1].toLowerCase();
        var isVowel = false;

        switch (ch) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                isVowel = true;
                break;
        }

        switch (next) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                if (isVowel == true) {
                    count++;
                }
                break;
        }
    }

    return count;
}

var line = prompt("Enter a line of text:");

document.write("Vowel Pairs = " + countVowelPairs(line) + "<br><br>");


// Q8. Convert distance in kilometres to metres, feet, inches and centimetres.

function convertToMeters(km) {
    document.write("Meters = " + (km * 1000) + "<br>");
}

function convertToFeet(km) {
    document.write("Feet = " + (km * 3280.84) + "<br>");
}

function convertToInches(km) {
    document.write("Inches = " + (km * 39370.08) + "<br>");
}

function convertToCentimeters(km) {
    document.write("Centimeters = " + (km * 100000) + "<br>");
}

var km = +prompt("Enter distance in kilometres:");

convertToMeters(km);
convertToFeet(km);
convertToInches(km);
convertToCentimeters(km);

document.write("<br>");


// Q9. Calculate overtime pay at Rs. 12 per hour above 40 hours.

function overtimePay(hours) {
    if (hours > 40) {
        return (hours - 40) * 12;
    } else {
        return 0;
    }
}

var hours = +prompt("Enter total hours worked:");

document.write("Overtime Pay = Rs. " + overtimePay(hours) + "<br><br>");


// Q10. Calculate currency notes of Rs. 100, Rs. 50 and Rs. 10.

var amount = +prompt("Enter amount in rupees (multiple of 10):");

var notes100 = Math.floor(amount / 100);
amount = amount % 100;

var notes50 = Math.floor(amount / 50);
amount = amount % 50;

var notes10 = Math.floor(amount / 10);

document.write("Rs. 100 notes = " + notes100 + "<br>");
document.write("Rs. 50 notes = " + notes50 + "<br>");
document.write("Rs. 10 notes = " + notes10 + "<br>");
