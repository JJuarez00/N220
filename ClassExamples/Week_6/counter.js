
let currentCount = 0;

function current() {
  document.querySelector("#counter").innerHTML = currentCount;
}

current();

function addCount() {  
    currentCount++;
    current(); // call the current function to display count.
}