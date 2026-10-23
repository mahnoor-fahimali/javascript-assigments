// 1. Show an alert box on click on a link.

function greet(){
    alert("hey! welcome to my web")
}

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

function showMessage(){
    alert("Thanks for purchasing a phone from us!")
}



// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

function deleteRow(e){
    var row = (e.closest("tr"))
    console.log(row);
    row.remove()
}

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

function firstImage(){
    document.getElementById("pic").innerHTML = '<img src="./images/jasmine.jpg" width="300">'
}

function secondImage(){
    document.getElementById("pic").innerHTML = '<img src="./images/tulip.jpg" width="300">'
}

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.


var span = document.getElementById("number")
var number = Number(span.innerText)

console.log(number);

function increment(){
    number = number+1
    console.log(number);
    span.innerText= number
}


function decrement(){
    number = number-1
    console.log(number);
    span.innerText= number
}


