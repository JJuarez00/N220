
let studentGrades = [78, 86, 92, 77];

const answersPTag = document.getElementById("answers");

function printAnswer(answer) {
    answersPTag.innerHTML += ` <br>${answer}<br>`
};

/////// ARRAY BACICS

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





/////// ARRAY MORE

const friends = [
    "elmo", 
    "spongebob", 
    "catdog", 
    "danny phantom", 
    "Timmy Turner"
];

function printExtraAnswers() {
    document.querySelector("#extraAnswers").innerHTML += `<br>
    ${friends}`
};

//1. Add Items to Array
friends.push("jimmy neutron");
printExtraAnswers();

//2. remove the last item
friends.pop();
printExtraAnswers();


//3. remove the first item
friends.splice(0, 1);
printExtraAnswers();


//4. add item to front of array using splice
friends.splice(0, 0, "Invader Zim");
printExtraAnswers();


//5.  Delete third value
friends.splice(2, 1);
printExtraAnswers();


//6. Splice 
friends.splice(2, 0, "Gir");
printExtraAnswers();

friends.splice(3, 0, ["patrick", "squidward"]);
printExtraAnswers();

// splice takes three parameters
// first one takes the index
// the second one take how much do you want to delete, 0 for none or 1 for one
// the third one is what you want to add to the array


//7. 
friends.splice(2, 2);
printExtraAnswers();





/////// Objects


const person = {
    firstName: "granny",
    lastName: "jojo",
    age: 60,
    hometown: "clarksville",
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
};

//1.  show full name
document.getElementById("fullName").innerHTML += person.getFullName();


//2. Change value
person.age += 1;
document.getElementById("newFProp").innerHTML += `${person.age}`;


//3. print 
document.getElementById("newFProp").innerHTML += ` <br> ${JSON.stringify(
    person
)}`

//4. Remove property from person
delete person.hometown;
document.getElementById("newFProp").innerHTML += ` <br> ${JSON.stringify(
  person
)}`;



// 5. Print a sentence using our object

console.log(`${person.getFullName()} is ${person.age} years old`);

//6. add a method to an exisiting object

person.isASenior = function() {
    return this.age >= 65;
};

console.log(person.isASenior())

person.age += 10;


let keyProp = "age";
console.log(person.isASenior());
console.log(person["age"]);
