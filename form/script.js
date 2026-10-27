function checkAddress() {
    var name = document.getElementById("nameField").value;
    var email = document.getElementById("emailField").value;
    var phone = document.getElementById("phoneField").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Email address required.");
        return false;
    }
    if (email.indexOf("@") === -1) {
        alert("Please enter a valid email address containing '@'.");
        return false;
    }

    if (phone === "") {
        alert("Please enter your phone number.");
        return false;
    }
    document.getElementById("displayName").innerHTML = name;
    document.getElementById("displayEmail").innerHTML = email;
    document.getElementById("displayPhone").innerHTML = phone;


    document.getElementById("formBox").style.display = "none";
    document.getElementById("cardBox").style.display = "block";

    return false;
}