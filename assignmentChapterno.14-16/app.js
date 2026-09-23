

// Q.1 Declare an empty array using JS literal notation
// to store student names in future.

var studentNames = [];

document.write(`<h3>Q.1</h3>`);
document.write(`Empty Student Names Array: ${studentNames}<br><br>`);


// Q.2 Declare an empty array using JS object notation
// to store student names in future.

var studentNames2 = new Array();

document.write(`<h3>Q.2</h3>`);
document.write(`Empty Student Names Array: ${studentNames2}<br><br>`);


// Q.3 Declare and initialize a strings array.

var stringArray = [`Apple`, `Mango`, `Banana`, `Orange`];

document.write(`<h3>Q.3</h3>`);
document.write(`String Array: ${stringArray}<br><br>`);


// Q.4 Declare and initialize a numbers array.

var numbersArray = [10, 20, 30, 40, 50];

document.write(`<h3>Q.4</h3>`);
document.write(`Numbers Array: ${numbersArray}<br><br>`);


// Q.5 Declare and initialize a boolean array.

var booleanArray = [true, false, true, false];

document.write(`<h3>Q.5</h3>`);
document.write(`Boolean Array: ${booleanArray}<br><br>`);


// Q.6 Declare and initialize a mixed array.

var mixedArray = [`Mahnoor`, 20, true, `Karachi`];

document.write(`<h3>Q.6</h3>`);
document.write(`Mixed Array: ${mixedArray}<br><br>`);


// Q.7 Declare and initialize an array and store
// available education qualifications in Pakistan.
// Show the qualifications in browser.

var qualifications = [
    `SSC`,
    `HSC`,
    `BCS`,
    `BS`,
    `BCOM`,
    `MS`,
    `M. Phil.`,
    `PhD`
];

document.write(`<h3>Q.7 Education Qualifications</h3>`);

for (var i = 0; i < qualifications.length; i++) {
    document.write(`${qualifications[i]}<br>`);
}

document.write(`<br>`);


// Q.8 Store 3 student names in an array.
// Take another array to store scores of these students.
// Total marks are 500 for each student.
// Display scores and percentages.

var students = [`Ali`, `Sana`, `Ahmed`];

var scores = [450, 400, 350];

var totalMarks = 500;

document.write(`<h3>Q.8 Student Scores and Percentages</h3>`);

for (var i = 0; i < students.length; i++) {

    var percentage = (scores[i] / totalMarks) * 100;

    document.write(
        `${students[i]} scored ${scores[i]} out of ${totalMarks} and got ${percentage}%<br>`
    );
}

document.write(`<br>`);


// Q.9 Initialize an array with color names.
// Display the array elements in browser.

var colors = [`Red`, `Green`, `Blue`, `Yellow`];

document.write(`<h3>Q.9 Colors</h3>`);

document.write(`Original Colors: ${colors}<br><br>`);


// Q.9 (a) Ask the user what color he/she wants
// to add to the beginning of the array.

var colorBeginning = prompt(`Enter a color to add at the beginning:`);

colors.unshift(colorBeginning);

document.write(`After adding color at beginning: ${colors}<br><br>`);


// Q.9 (b) Ask the user what color he/she wants
// to add to the end of the array.

var colorEnd = prompt(`Enter a color to add at the end:`);

colors.push(colorEnd);

document.write(`After adding color at end: ${colors}<br><br>`);


// Q.9 (c) Add two more colors to the beginning
// of the array.

colors.unshift(`White`);
colors.unshift(`Black`);

document.write(`After adding two colors at beginning: ${colors}<br><br>`);


// Q.9 (d) Delete the first color in the array.

colors.shift();

document.write(`After deleting first color: ${colors}<br><br>`);


// Q.9 (e) Delete the last color in the array.

colors.pop();

document.write(`After deleting last color: ${colors}<br><br>`);


// Q.9 (f) Ask the user at which index he/she wants
// to add a color and color name.
// Then add the color at that index.

var addIndex = +prompt(`Enter the index where you want to add a color:`);

var addColor = prompt(`Enter the color name:`);

colors.splice(addIndex, 0, addColor);

document.write(`After adding color at index ${addIndex}: ${colors}<br><br>`);


// Q.9 (g) Ask the user at which index he/she wants
// to delete color(s) and how many colors he/she
// wants to delete.

var deleteIndex = +prompt(`Enter the index from where you want to delete:`);

var deleteNumber = +prompt(`How many colors do you want to delete:`);

colors.splice(deleteIndex, deleteNumber);

document.write(`After deleting colors: ${colors}<br><br>`);


// Q.10 Store student scores in an array
// and sort the array in ascending order
// using Array's sort method.

var studentScores = [320, 450, 280, 490, 370, 410];

document.write(`<h3>Q.10 Student Scores</h3>`);

document.write(`Before Sorting: ${studentScores}<br>`);

studentScores.sort(function(a, b) {
    return a - b;
});

document.write(`After Sorting: ${studentScores}<br><br>`);


// Q.11 Initialize an array with city names.
// Copy 3 array elements from cities array
// to selectedCities array.

var cities = [
    `Karachi`,
    `Lahore`,
    `Islamabad`,
    `Quetta`,
    `Peshawar`
];

var selectedCities = cities.slice(0, 3);

document.write(`<h3>Q.11 Cities</h3>`);

document.write(`Cities: ${cities}<br>`);
document.write(`Selected Cities: ${selectedCities}<br><br>`);


// Q.12 Create a single string from the given array
// using array's join method.
//
// var arr = ["This ", " is ", " my ", " cat"];

var arr = [`This `, ` is `, ` my `, ` cat`];

var sentence = arr.join(``);

document.write(`<h3>Q.12</h3>`);

document.write(`${sentence}<br><br>`);


// Q.13 Create a new array.
// Store values one by one in such a way
// that you can access the values in the order
// in which they were stored.
// FIFO - First In First Out

var fifoArray = [];

fifoArray.push(`Value 1`);
fifoArray.push(`Value 2`);
fifoArray.push(`Value 3`);

document.write(`<h3>Q.13 FIFO</h3>`);

document.write(`First value: ${fifoArray.shift()}<br>`);
document.write(`Second value: ${fifoArray.shift()}<br>`);
document.write(`Third value: ${fifoArray.shift()}<br><br>`);


// Q.14 Create a new array.
// Store values one by one in such a way
// that you can access the values in reverse order.
// LIFO - Last In First Out

var lifoArray = [];

lifoArray.push(`Value 1`);
lifoArray.push(`Value 2`);
lifoArray.push(`Value 3`);

document.write(`<h3>Q.14 LIFO</h3>`);

document.write(`First value: ${lifoArray.pop()}<br>`);
document.write(`Second value: ${lifoArray.pop()}<br>`);
document.write(`Third value: ${lifoArray.pop()}<br><br>`);


// Q.15 Store phone manufacturers in an array.
// Apple, Samsung, Motorola, Nokia, Sony & Haier.
// Display a dropdown/select menu in browser
// using document.write() method.

var manufacturers = [
    `Apple`,
    `Samsung`,
    `Motorola`,
    `Nokia`,
    `Sony`,
    `Haier`
];

document.write(`<h3>Q.15 Phone Manufacturers</h3>`);

document.write(`<select>`);

for (var i = 0; i < manufacturers.length; i++) {
    document.write(`<option>${manufacturers[i]}</option>`);
}

document.write(`</select>`);
