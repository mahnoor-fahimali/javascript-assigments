
var char1 = document.getElementById("char1");
var char2 = document.getElementById("char2");

var left = 0;


function characterAnimation(event) {
    console.log(event.keyCode);

    if (event.keyCode == 39 && left < 1490) {
        left = left + 10;
        char1.style.left = left + "px";
        char1.src = "assests/images/captainkid-cmoncmon.gif";

        setTimeout(() => {
            char1.src = "assests/images/captainkid-stand12.gif";
        }, 1000);
    }

    if (event.keyCode == 37 && left > 40) {
        left = left - 10;
        char1.style.left = left + "px";
        char1.style.transform = "scaleX(-1)";
        char1.src = "assests/images/captainkid-cmoncmon.gif";

        setTimeout(() => {
            char1.src = "assests/images/captainkid-stand12.gif";
        char1.style.transform = "scaleX(1)";
        }, 1000);
    }

    if (event.keyCode == 32) {
        char1.src = "assests/images/captainkid-punch.gif";

        setTimeout(() => {
            char1.src = "assests/images/captainkid-stand12.gif";
        }, 2500);
    }

    console.log(left);
}


var right = 0;

function geeseAnimation(event) {
    console.log(event.keyCode);

    if (event.keyCode == 65 && right < 1490) {
        right = right + 10;
        char2.style.right = right + "px";
        char2.style.transform = "scaleX(-1)";
        char2.src = "assests/images/geese-cs-walk.gif";

        setTimeout(() => {
            char2.src = "assests/images/geese-96stance.gif";
        }, 1000);
    }

    if (event.keyCode == 68 && right > 40) {
        right = right - 10;
        char2.style.right = right + "px";
        char2.style.transform = "scaleX(1)";
        char2.src = "assests/images/geese-cs-walk.gif";

        setTimeout(() => {
            char2.src = "assests/images/geese-96stance.gif";
        char2.style.transform = "scaleX(-1)";
        }, 1000);
    }

    if (event.keyCode == 83) {
        char2.src = "assests/images/geese-cs-taunt.gif";

        setTimeout(() => {
            char2.src = "assests/images/geese-96stance.gif";
        }, 1500);
    }

    console.log(right);
}

window.addEventListener("keydown", characterAnimation);
window.addEventListener("keydown", geeseAnimation);
