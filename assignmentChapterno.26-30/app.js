// question No.01
document.write(`Question no.01 <br>`)

var num = prompt("Enter a positive integar. ")

document.write(`a. Number: ${num} <br>`)
document.write(`b. Round: ${Math.round(num)} <br>`)
document.write(`c.Floor: ${Math.floor(num)}`)
document.write(`d.ceil: ${Math.ceil(num)} <br>`)

// question Number 2
document.write(`Question no.02 <br>`)

var float = prompt("Enter a negative floating point number (e.g. -9.2.")

document.write(`a. Number ${float} <br>`)
document.write(`b. Round ${Math.round(float)} <br>`)
document.write(`c. floor ${Math.floor(float)}<br>`)
document.write(`d. ceil ${Math.ceil(float)} <br>`)

// question number 3

document.write(`Question no.03 <br>`)

var value = prompt("Enter any number either positive or negative.")

document.write(`Absolute value of ${value} is ${Math.abs(value)} <br>`)

// question number 4

document.write(`Question no.04 <br>`)

var dice = (Math.random() * 6 + 1)
document.write(`Dice shows ${parseInt(dice)} <br>`)

// question number 5

document.write(`Question no.05 <br>`)

var userCoin = prompt("Enter heads or tails").toLowerCase();
var coin = Math.random() * 2;
var tossed = Math.floor(coin) + 1;
var result = ""
if (tossed === 1) {
    result = "heads"
} else {
    result = "tails"
}

if (userCoin === result) {
    console.log("You win! coin landed on ", result);
} else if (userCoin === "heads" || userCoin === "tails") {
    console.log("You lose! coin landed on ", result);
} else {
    console.log("Invaild Input.");
}

// question number 6

var  randomNum = Math.floor(Math.random() * 100) + 1;

document.write("Random number: " + randomNum + "<br>")

// question number 7

var weight = prompt("Enter your weight");

var parsedWeight = parseFloat(weight);

document.write(`Your weight is ${parsedWeight} kg`);

// question number 8

var secretNumber = Math.floor(Math.random() * 10) + 1;

var userNumber = +prompt("Guess a number between 1 and 10");

if (userNumber === secretNumber) {
    alert("Congratulations! You guessed the correct number.");
}