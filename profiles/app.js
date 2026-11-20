var student1 = {
    name:"mahnoor",
    class:"10",
    rollNumber: "57823",
    subjects : {
        sub1: "biology",
        sub2: "chemistry",
        sub3: "physics"
    }
}

var student2 = {
    name:"hafsa",
    class:"09",
    rollNumber: "45789",
    subjects : {
        sub1: "compuer science",
        sub2: "urdu",
        sub3: "english"
    }
}

var student3 = {
    name:"hina",
    class:"12",
    rollNumber: "01784",
    subjects : {
        sub1: "botany",
        sub2: "chemistry",
        sub3: "phrmacology"
    }
}

var student4 = {
    name:"ayesha",
    class:"11",
    rollNumber: "38204",
    subjects : {
        sub1: "biochemistry",
        sub2: "zoology",
        sub3: "physics"
    }
}

// profile no.1
document.getElementById("profile1").innerHTML = `
<div class="card text-center h-100">
  <div class="card-header">
    <b>Roll Number: ${student1.rollNumber}</b>
  </div>

  <div class="card-body">
    <h5 class="card-title">Student's Name: ${student1.name}</h5>

    <p class="card-text">Class: ${student1.class}</p>

    <h5 class="card-text">Enrolled subjects:</h5>

    <div class="border rounded-3 overflow-auto" style="width: 100%;">
      <table class="table table-striped mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Subjects</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>${student1.subjects.sub1}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>${student1.subjects.sub2}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>${student1.subjects.sub3}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <a href="#" class="btn btn-primary mt-3">
      Look over more details!
    </a>
  </div>
</div>`;

// profile no.2
document.getElementById("profile2").innerHTML = `
<div class="card text-center h-100">
  <div class="card-header">
    <b>Roll Number: ${student2.rollNumber}</b>
  </div>

  <div class="card-body">
    <h5 class="card-title">Student's Name: ${student2.name}</h5>

    <p class="card-text">Class: ${student2.class}</p>

    <h5 class="card-text">Enrolled subjects:</h5>

    <div class="border rounded-3 overflow-auto" style="width: 100%;">
      <table class="table table-striped mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Subjects</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>${student2.subjects.sub1}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>${student2.subjects.sub2}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>${student2.subjects.sub3}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <a href="#" class="btn btn-primary mt-3">
      Look over more details!
    </a>
  </div>
</div>`;

// profile no.3
document.getElementById("profile3").innerHTML = `
<div class="card text-center h-100">
  <div class="card-header">
    <b>Roll Number: ${student3.rollNumber}</b>
  </div>

  <div class="card-body">
    <h5 class="card-title">Student's Name: ${student3.name}</h5>

    <p class="card-text">Class: ${student3.class}</p>

    <h5 class="card-text">Enrolled subjects:</h5>

    <div class="border rounded-3 overflow-auto" style="width: 100%;">
      <table class="table table-striped mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Subjects</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>${student3.subjects.sub1}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>${student3.subjects.sub2}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>${student3.subjects.sub3}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <a href="#" class="btn btn-primary mt-3">
      Look over more details!
    </a>
  </div>
</div>`;

// profile no.4
document.getElementById("profile4").innerHTML = `
<div class="card text-center h-100">
  <div class="card-header">
    <b>Roll Number: ${student4.rollNumber}</b>
  </div>

  <div class="card-body">
    <h5 class="card-title">Student's Name: ${student4.name}</h5>

    <p class="card-text">Class: ${student4.class}</p>

    <h5 class="card-text">Enrolled subjects:</h5>

    <div class="border rounded-3 overflow-auto" style="width: 100%;">
      <table class="table table-striped mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Subjects</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>${student4.subjects.sub1}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>${student4.subjects.sub2}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>${student4.subjects.sub3}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <a href="#" class="btn btn-primary mt-3">
      Look over more details!
    </a>
  </div>
</div>`;

