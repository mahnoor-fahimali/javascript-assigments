// question number 01

var today = new Date()
console.log(today);

// question number 02

var today = new Date()
var month = today.getMonth()

var monthNames = ["january", "feburary", "march", "aprril", "may", "june ", "july", "august", "september", "october", "november", "december"]

var currentMonth = monthNames[month]

alert("current month: " + currentMonth)

// question number 03 

var today = new Date();

var day = today.getDay();

var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var getDay = dayNames[day];

var firstThree = getDay.slice(0, 3);

alert(firstThree);




// question number 04

var today = new Date()
var day = today.getDay()

if (day === 0 || day === 6) {
    alert("It's a fun day!")
}

// question number 05

var today = new Date()
var date = today.getDate()

if (date <= 15) {
    alert("First fifteen days of the month")
} else if (date > 15) {
    alert("last day of the month")
}

// question number 06

var today = new Date()
console.log(today)

var milliseconds = today.getTime()
console.log(milliseconds)

var seconds = today.getTime() / (1000)
console.log(seconds)

// question number 07

var today = new Date()
var hour = today.getHours()

if (hour < 12) {
    alert("its AM")
} else {
    alert("its PM")
}


// question number 08

var laterDate = new Date("31 december, 2026");
// laterDate.setMonth(11);
// laterDate.setDate(31);

console.log(laterDate);

// quetion number 09

var ramadan = new Date("19 feb,2026");
var today = new Date();

var daysPast = Math.floor((today - ramadan) / (1000 * 60 * 60 * 24));

alert(daysPast);

// question number 10

var referenceDate = new Date();
var beginning2015 = new Date("January 1, 2015");

var seconds = Math.floor((referenceDate - beginning2015) / 1000);

console.log(seconds);

// question number 11

var today = new Date()
console.log(today)

var hour = today.getHours()
today.setHours(hour + 1)

console.log(today)
document.write(today)
// question number 12

var today = new Date()
console.log(today)

today.setFullYear(today.getFullYear() - 100)

alert(today)
// question number 13

var age = prompt("Enter your age")

var today = new Date()
var currentYear = today.getFullYear()

var birthYear = currentYear - age

document.write("Your birth year is: " + birthYear)
// question number 14

var customerName = "Ali"
var currentMonth = "October"
var numberOfUnits = 250
var chargesPerUnit = 30
var latePaymentSurcharge = 500

var netAmount = numberOfUnits * chargesPerUnit

var grossAmount = netAmount + latePaymentSurcharge

document.write("Customer Name: " + customerName + "<br>")
document.write("Current Month: " + currentMonth + "<br>")
document.write("Number of Units: " + numberOfUnits + "<br>")
document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br>")
document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>")
document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>")
document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2))