
// Function One
function simpleFunctionOne() {
    document.getElementById("changeTxt").innerHTML +=
      "<br/> <br/>"+"'DONT CHANGE THIS PARAGRAPH'";
}

simpleFunctionOne();

// Function Two
function simpleFunctionTwo() {
    document.querySelector("body").innerHTML += "This function does not take any parameters";
}

simpleFunctionTwo();


// Function Two
function sayHelloWorld() {
    console.log("Hello World! This is function Two.");
}

sayHelloWorld();



// Function Three
function sayFavBand(bandName) {
    document.getElementById("favBand").innerHTML += bandName + "<br/>";
}

sayFavBand("The Marias");
sayFavBand("Green Day");



// Function Four
function sayMyName(miNombre) {
    console.log(miNombre);
}

sayMyName("Say my name");
sayMyName("Say my name, luh bro");



// Function Five
function calcRecPerimeter(height, width) {
  const perimeter = 2 * height + 2 * width;
  document.querySelector("#panswer").innerHTML += perimeter;
  // The # is used to call the ID, which is: id="panswer"
}

calcRecPerimeter(2, 4);

// Function Six
    // Make sure the function name is
    // the same as the onclick="example()"
function calcArea() {
    const height = document.getElementById("height").value;
    const width = document.getElementById("width").value;
    console.log("height", height);
    console.log("weight", width);
    document.querySelector("#answer").innerHTML += "Area: " + height * width + "<br/>";
}


// Function Seven
function calcRecAreaAndPeri(height, width) {
    const perimeter = 2 * (height, width);
    const area = height * width;

    document.getElementById("multiAnswer").innerHTML += `
    Height: ${height} <br/>
    Width: ${width} <br/>
    Perimeter: ${perimeter} <br/>
    Area: ${area} <br/> <br/>
    `;
}

calcRecAreaAndPeri(2, 2);
calcRecAreaAndPeri(3, 2);


// Function Eighth
function myFunction() {
    alert("Who Goes There?");
}



// Function Nine
function wizard(name, occupation) {
    confirm(`
        Welcome ${name}, the ${occupation}
        `)
        
    document.getElementById("future").innerHTML += `
    Welcome ${name}, the ${occupation}!
    `
}


// Function Ten
function addItem() {
    const newItem = prompt("Add Item: ");
    console.log(newItem);
}


// Function Eleven

function returnValue(color) {
    return color;
}

alert(returnValue("blue"));


// Function Tweleve
function  calcCircleArea(radius) {
    return 2* Math.PI * radius
}

document.getElementById("useOne").innerHTML += calcCircleArea(2);
document.getElementById("useTwo").innerHTML += calcCircleArea(4);