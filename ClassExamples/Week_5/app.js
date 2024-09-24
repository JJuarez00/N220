

const class1 = {
    num: "N220",
    name: "Intro to Media Development",
    totalSeats: 20,
    enrolled: 18,
    
    check: function () {
        return this.totalSeats > this.enrolled;
    }
};

console.log(`N220 Open: ${class1.check()}\n`);

class1.enrolled += 2
console.log(`Total Students: ${class1.enrolled}`);

console.log(`N220 Open: ${class1.check()}\n`);

var tacocat = "wednesday";

function IUPUIWebsite() {
    console.log(window.tacocat)
    console.log(`inner width: ${window.innerWidth}`);
    console.log(`outer width: ${window.outerWidth}`);

    console.log(window.location)
};

function printPage () {
    window.print();
};


document.getElementById("dpDetails").innerHTML += class1.name;
document.querySelector("#domain").innerHTML += "Hi";
const updatePTag = document.getElementById("update");
console.log(updatePTag.querySelector("#delete"))

console.log(String(100), 100); // gets me "100" 100

console.log(String(100).includes("2"), 100); // gets me false 100

console.log("100".replace("0", "2", 100)); // gets me 120

console.log("100".replaceAll("0", "2", 100)); // gets me 122
