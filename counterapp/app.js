var span = document.getElementById("number");
var number = Number(span.innerText);

console.log(number);

function increment() {
    number = number + 1;
    console.log(number);
    span.innerText = number;
}

function decrement() {
    number = number - 1;
    console.log(number);
    span.innerText = number;
}

function reset() {
    number = 0;
    console.log(number);
    span.innerText = number;
}