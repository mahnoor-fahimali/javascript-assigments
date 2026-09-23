


// Q.1 Declare and initialize an empty multidimensional array.
// (Array of arrays)

var multiArray = [[], []];

document.write(`<h3>Q.1</h3>`);
document.write(`Empty Multidimensional Array: ${multiArray}<br><br>`);


// ---------------------------------------------------------


// Q.2 Declare and initialize a multidimensional array
// representing the given matrix.

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

document.write(`<h3>Q.2 Multidimensional Array</h3>`);

for (var i = 0; i < matrix.length; i++) {

    for (var j = 0; j < matrix[i].length; j++) {

        document.write(`${matrix[i][j]} `);

    }

    document.write(`<br>`);
}

document.write(`<br>`);


// ---------------------------------------------------------


// Q.3 Write a program to print numeric counting from 1 to 10.

document.write(`<h3>Q.3 Counting from 1 to 10</h3>`);

for (var i = 1; i <= 10; i++) {

    document.write(`${i}<br>`);

}

document.write(`<br>`);


// ---------------------------------------------------------


// Q.4 Write a program to print multiplication table
// of any number using for loop.
// Table number and length should be taken as input from user.

var tableNumber = +prompt(`Enter the table number:`);
var tableLength = +prompt(`Enter the length of table:`);

document.write(`<h3>Q.4 Multiplication Table of ${tableNumber}</h3>`);

for (var i = 1; i <= tableLength; i++) {

    document.write(
        `${tableNumber} x ${i} = ${tableNumber * i}<br>`
    );

}

document.write(`<br>`);


// ---------------------------------------------------------


// Q.5 Write a program to print items of the following array
// using for loop:
// fruits = ["apple", "banana", "mango", "orange", "strawberry"]

var fruits = [
    `apple`,
    `banana`,
    `mango`,
    `orange`,
    `strawberry`
];

document.write(`<h3>Q.5 Fruits</h3>`);

for (var i = 0; i < fruits.length; i++) {

    document.write(`${fruits[i]}<br>`);

}

document.write(`<br>`);


// ---------------------------------------------------------


// Q.6 Generate the following series in your browser.

// a. Counting: 1, 2, 3, 4, 5, ... 15

document.write(`<h3>Q.6 Series</h3>`);

document.write(`<b>a. Counting:</b> `);

for (var i = 1; i <= 15; i++) {

    document.write(`${i}`);

    if (i < 15) {
        document.write(`, `);
    }

}

document.write(`<br><br>`);


// b. Reverse counting: 10, 9, 8, ... 1

document.write(`<b>b. Reverse Counting:</b> `);

for (var i = 10; i >= 1; i--) {

    document.write(`${i}`);

    if (i > 1) {
        document.write(`, `);
    }

}

document.write(`<br><br>`);


// c. Even: 0, 2, 4, 6, ... 20

document.write(`<b>c. Even:</b> `);

for (var i = 0; i <= 20; i = i + 2) {

    document.write(`${i}`);

    if (i < 20) {
        document.write(`, `);
    }

}

document.write(`<br><br>`);


// d. Odd: 1, 3, 5, 7, ... 19

document.write(`<b>d. Odd:</b> `);

for (var i = 1; i <= 19; i = i + 2) {

    document.write(`${i}`);

    if (i < 19) {
        document.write(`, `);
    }

}

document.write(`<br><br>`);


// e. Series: 2k, 4k, 6k, ... 20k

document.write(`<b>e. Series:</b> `);

for (var i = 2; i <= 20; i = i + 2) {

    document.write(`${i}k`);

    if (i < 20) {
        document.write(`, `);
    }

}

document.write(`<br><br>`);


// ---------------------------------------------------------


// Q.7 You have an array:
// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// Write a program to enable search by user input in an array.
// After searching, tell the user whether the item is found or not.

var A = [
    `cake`,
    `apple pie`,
    `cookie`,
    `chips`,
    `patties`
];

var searchItem = prompt(`Enter an item to search:`);

var found = false;

for (var i = 0; i < A.length; i++) {

    if (A[i] == searchItem) {

        found = true;

    }

}

if (found == true) {

    document.write(
        `<h3>Q.7 Search Result</h3>`
    );

    document.write(
        `${searchItem} is found in the list.`
    );

} else {

    document.write(
        `<h3>Q.7 Search Result</h3>`
    );

    document.write(
        `${searchItem} is not found in the list.`
    );

}

document.write(`<br><br>`);


// ---------------------------------------------------------


// Q.8 Write a program to identify the largest number
// in the given array.
// A = [24, 53, 78, 91, 12]

var numbers = [24, 53, 78, 91, 12];

var largest = numbers[0];

for (var i = 1; i < numbers.length; i++) {

    if (numbers[i] > largest) {

        largest = numbers[i];

    }

}

document.write(`<h3>Q.8 Largest Number</h3>`);

document.write(`The largest number is: ${largest}<br><br>`);


// ---------------------------------------------------------


// Q.9 Write a program to identify the smallest number
// in the given array.
// A = [24, 53, 78, 91, 12]

var numbers2 = [24, 53, 78, 91, 12];

var smallest = numbers2[0];

for (var i = 1; i < numbers2.length; i++) {

    if (numbers2[i] < smallest) {

        smallest = numbers2[i];

    }

}

document.write(`<h3>Q.9 Smallest Number</h3>`);

document.write(`The smallest number is: ${smallest}<br><br>`);


// ---------------------------------------------------------


// Q.10 Write a program to print multiples of 5
// ranging from 1 to 100.

document.write(`<h3>Q.10 Multiples of 5</h3>`);

for (var i = 5; i <= 100; i = i + 5) {

    document.write(`${i}<br>`);

}

