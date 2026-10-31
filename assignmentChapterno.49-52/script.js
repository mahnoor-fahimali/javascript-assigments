

function signup() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    document.getElementById("result").innerHTML =
        "Name: " + name + "<br>" +
        "Email: " + email + "<br>" +
        "Password: " + password;
}



function readMore() {

    var moreText = document.getElementById("more");
    var btn = document.getElementById("readBtn");

    if (moreText.style.display === "none") {

        moreText.style.display = "inline";
        btn.innerHTML = "Read Less";

    } else {

        moreText.style.display = "none";
        btn.innerHTML = "Read More";

    }
}


var editRow;


function addStudent() {

    var name = document.getElementById("studentName").value;
    var studentClass = document.getElementById("studentClass").value;
    var age = document.getElementById("studentAge").value;

    if (name === "" || studentClass === "" || age === "") {
        alert("Please enter all details");
        return;
    }

    var table = document.getElementById("studentTable");

    var row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = studentClass;
    row.insertCell(2).innerHTML = age;

    row.insertCell(3).innerHTML =
        '<button onclick="editStudent(this)">Edit</button> ' +
        '<button onclick="deleteStudent(this)">Delete</button>';

    document.getElementById("studentName").value = "";
    document.getElementById("studentClass").value = "";
    document.getElementById("studentAge").value = "";

}




function deleteStudent(btn) {

    var row = btn.parentNode.parentNode;

    row.remove();

}




function editStudent(btn) {

    editRow = btn.parentNode.parentNode;

    document.getElementById("editName").value =
        editRow.cells[0].innerHTML;

    document.getElementById("editClass").value =
        editRow.cells[1].innerHTML;

    document.getElementById("editAge").value =
        editRow.cells[2].innerHTML;

    document.getElementById("editForm").style.display = "block";

}



function updateStudent() {

    editRow.cells[0].innerHTML =
        document.getElementById("editName").value;

    editRow.cells[1].innerHTML =
        document.getElementById("editClass").value;

    editRow.cells[2].innerHTML =
        document.getElementById("editAge").value;

    document.getElementById("editForm").style.display = "none";

}
