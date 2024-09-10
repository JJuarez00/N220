
function simpleFunctionOne() {
    // code
    document.getElementById('changeTxt').innerHTML +=
    "'DONT CHANGE THIS PARAGRAPH'";
}

simpleFunctionOne();

function simpleFunctionTwo() {
    document.querySelector("body").innerHTML += "This function does not take any parameters";
}

simpleFunctionTwo();

function sayHelloWorld() {
    console.log("Hello World! This is function Two.");
}

sayHelloWorld();
