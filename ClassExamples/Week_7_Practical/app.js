

const listOfTimes = [];


function addTime() {

  // clear the text
  document.querySelector("#listOfTimes").innerHTML = ``;
  document.querySelector("#averageTime").innerHTML = ``;

  // get the value from the input and add it to a variable.
  const newTimie = parseFloat(document.getElementById("newTimie").value);

  // then whats inside the variable gets put inside the array.
  listOfTimes.push(newTimie);

  // then the time is displayed the listOfTimes HTML ID
  document.querySelector("#listOfTimes").innerHTML = `${listOfTimes}`;

    // set sum to zero
    let sum = 0;

    // loop 
    for (let i = 0; i < listOfTimes.length; i++) {

      // add to the sum
      sum += listOfTimes[i]; // add each time to the sum
    }

    // calculate the average
    const average = sum / listOfTimes.length;

    document.querySelector("#averageTime").innerHTML = `${average}`;
};
