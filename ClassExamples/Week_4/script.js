
let studentGrades = [78, 86, 92, 77];

const answersPTag = document.getElementById("answers");

function printAnswer(answer) {
    answersPTag.innerHTML += ` <br>${answer} <br><br>`
};

// 1. Arrray will print as a string seperated with commas by default.
printAnswer(studentGrades);


// 2. Access specific values in array using indexes.
printAnswer(studentGrades[1]);


// 3. Assign array [1] to a new value which would be 83.
studentGrades[1] = 83;
printAnswer(studentGrades[1]);


//4. Same as 1
printAnswer(studentGrades);


//5. All array have a lenght of even  if its zero.
printAnswer(studentGrades.length);


//6.  Add one point to even number in the array.
studentGrades.forEach(function (currentStudent, currentStudentIndex) {
    // Loop here.
    studentGrades[currentStudentIndex] += 1;
    answersPTag.innerHTML += `${studentGrades[currentStudentIndex]} `;
});

//7. Print array
printAnswer(studentGrades);


//8. Access specific values in array using indexes.
const indexOfLastStudent = studentGrades.length - 1;
printAnswer(studentGrades[indexOfLastStudent]);


//9. find average grade.
let totalOfGrades = 0;

studentGrades.forEach(function(currentGrade){
    totalOfGrades +=  currentGrade;
});

const averageGrade = totalOfGrades / studentGrades.length;
printAnswer(averageGrade);


//10. 
printAnswer(averageGrade > 80);

