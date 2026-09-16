// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

document.write(`The sum of ${num1} and ${num2} is  ${sum} </br>`);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// subtraction

var num1 = 20;
var num2 = 10;
var result = num1 - num2;

document.write(`The subtraction of  ${num1} and  ${num2} is  ${result}`);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Valueafter addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”

var num;

document.write("Value after variable declaration is: " + num + "<br>");

num = 5;

document.write("Initial value: " + num + "<br>");

num++;

document.write("Value after increment is: " + num + "<br>");

num = num + 7;

document.write("Value after addition is: " + num + "<br>");

num--;

document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;

document.write("The remainder is: " + remainder);

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie.

var ticketPrice = (600);
document.write("total cost to but 5 tickets to a movie is" + ticketPrice * 5 + "PKR")

// 5. Write a script to display multiplication table of any
// number in your browser.
var five = (5)
document.write(`Table of 4 </br>`);
document.write(` 5x1 = ${five * 1} </br>`);
document.write(` 5x2 = ${five * 2} </br>`);
document.write(` 5x3 = ${five * 3} </br>`);
document.write(` 5x4 = ${five * 4} </br>`);
document.write(` 5x5 = ${five * 5} </br>`);
document.write(` 5x6 = ${five * 6} </br>`);
document.write(` 5x7 = ${five * 7} </br>`);
document.write(` 5x8 = ${five * 8} </br>`);
document.write(` 5x9 = ${five * 9} </br>`);
document.write(` 5x10 = ${five * 10} </br>`);

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// Celsius to Fahrenheit
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;

document.write(celsius + "°C is " + fahrenheit + "°F<br>");

// Fahrenheit to Celsius
var fahrenheitTemp = 77;
var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;

document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

var priceItem1 = 500;
var priceItem2 = 800;

var quantityItem1 = 2;
var quantityItem2 = 1;

var shippingCharges = 200;

var totalItem1 = priceItem1 * quantityItem1;
var totalItem2 = priceItem2 * quantityItem2;

var totalCost = totalItem1 + totalItem2 + shippingCharges;

document.write("<h2>Shopping Cart Receipt</h2>");
document.write("Price of Item 1: " + priceItem1 + "<br>");
document.write("Ordered Quantity of Item 1: " + quantityItem1 + "<br>");
document.write("Total for Item 1: " + totalItem1 + "<br><br>");

document.write("Price of Item 2: " + priceItem2 + "<br>");
document.write("Ordered Quantity of Item 2: " + quantityItem2 + "<br>");
document.write("Total for Item 2: " + totalItem2 + "<br><br>");

document.write("Shipping Charges: " + shippingCharges + "<br>");
document.write("<h3>Total Cost: " + totalCost + "</h3> </br>");

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = 500;
var marksObtained = 425;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>"); document.write("Percentage: " + percentage + "% </br>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var usDollars = 10;
var saudiRiyals = 25;

var totalInPKR = (usDollars * 104.80) + (saudiRiyals * 28);

document.write("Total Currency in Pakistani Rupees: " + totalInPKR + " PKR </br>");

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var number = 5;

var result = (number + 5) * 10 / 2;

document.write("Result: " + result + "</br>");

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.


var currentYear = 2026;
var birthYear = 2005;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("They are either " + age1 + " or " + age2 + " years old </br>");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20;
var radius = 20;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area +"</br>");

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

var favoriteSnack = "Chips";
var currentAge = 20;
var maximumAge = 80;
var amountPerDay = 2;

var total = (maximumAge - currentAge) * 365 * amountPerDay;

document.write("You will need " + total + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge);

