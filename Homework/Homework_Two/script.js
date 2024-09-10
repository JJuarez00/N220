//base for elements: document.getElementById('').innerHTML += 

// Dating
let numTicket = 3;
let valueTicket = 14;

document.getElementById("ticketNum").innerHTML += numTicket;
document.getElementById("ticketCost").innerHTML += valueTicket;
document.getElementById("ttCost").innerHTML += numTicket * valueTicket;


// Shopping
let bankAmount = 235.87;
let shirtCost = 35;
let pantCost = 75;
let shoeCost = 60;
let totalCostOne = bankAmount - shirtCost - pantCost - shirtCost;

document.getElementById("bank").innerHTML += totalCostOne;

let jacketCost = 70;
let totalCostTwo = totalCostOne - jacketCost;
let totalCostFixed = totalCostTwo.toFixed(2);
document.getElementById("addJacket").innerHTML += (totalCostTwo>=0) + ", I would be left with: $" + totalCostFixed;


//Pizza
let totalPizza = 4;
let pizzaSlice = 8;
let studentEat = 2.5;
let studentTotal = (pizzaSlice / studentEat) * totalPizza;
let pizzaRemainder = (pizzaSlice % studentEat) * totalPizza;

document.getElementById("profPizzai").innerHTML += Math.floor(studentTotal); //Round Down, not up since student will not have 2.5 slices.
document.getElementById("profPizzaii").innerHTML += pizzaRemainder;


//Monty's Mega Bar
let adultValue = 12;
let childValue = 6;
let drinkValue = 1.5;
let totalMonty = (2*12)+(1*6)+(3*1.5);
document.getElementById("Monty").innerHTML += (totalMonty);


// Tips
let weekOne = 202.45;
let weekTwo = 134.97;
let weekThree = 256.63;
let weekFour = 178.22;
let averageMonth = (weekOne + weekTwo + weekThree + weekFour) / 4
document.getElementById("tips").innerHTML += averageMonth.toFixed(2);
