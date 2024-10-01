
const classroom = {
  students: [],
  name: "Example Classroom",
  showStudents() {
    document.getElementById("students").innerHTML = "";

    // this.students.forEach(function (studentName){
    // document.getElementById("students").innerHTML += studentName + "<br/>"
    for (let i = 0; i < this.students.length; i++) {
      const studentName = this.students[i];
      document.getElementById("students").innerHTML += studentName + "<br/>";
    }
  },
  maxStudents: 4,
};



function newStudent() {
  const currentStudents = classroom.students.length;

  if (currentStudents >= classroom.maxStudents) {
    console.log("no seats available");
  } else {

    // "push"" pushes the value to the array...
    classroom.students.push(document.getElementById("studentName").value);
    classroom.showStudents();
  }
};


function removeStudent() {
    classroom.students.pop();
    classroom.showStudents();
};
