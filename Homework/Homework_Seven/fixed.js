// Removed playerchoice variable.

let CompArray = ["Rock", "Paper", "Scissors"]; //  Changed () to [] & changed values to Strings.

let innerScore = 0; // Changed name to camelCase.

function RPS(numb) {

    document.getElementById("resultDecision").innerHTML = `Result Decision: `; // Added Clear Text.

    // Re-did the Random logic.
    let randNum = Math.floor(Math.random() * CompArray.length);
    let CompDecision = CompArray[randNum]; 

    // Console Checkpoint.
    console.log(`Computer Selected: ${CompDecision}`);
    console.log(`User clicked: ${CompArray[numb]}`);

    document.getElementById("resultDecision").innerHTML += `${CompDecision}`; // Removed Boolean.

    // Fixed: 
    //          Original Order: 3, 1, 2 
    //          Fixed Order: #==#, 0, 1, 2
    //          Re-did logic to include "else if" and order that makes a little more clear and concise.
    //          Added randNum for the tie IF statement.

    if (numb == randNum) {
        innerScore -= 0.5; // -.5  if  T I E
        console.log(`\t\t${CompArray[numb]} == ${CompDecision}.\t\t-.5`);

    } else if (numb == 0) { // If user selected "Rock" continue.
        if (CompDecision == "Paper") {
            innerScore -= 1; // Rock loses to Paper.
            console.log("\t\tRock loses to Paper.\t-1");
        } else if (CompDecision == "Scissors") {
            innerScore += 1; // Rock beats Scissors.
            console.log("\t\tRock beats to Scissors.\t+1");
        }

    } else if (numb == 1) { // If user selected "Paper" continue.
        if (CompDecision == "Scissors") {
            innerScore -= 1; // Paper loses to Scissors.
            console.log("\t\tPaper loses to Scissors.\t-1");
        } else if (CompDecision == "Rock") {
            innerScore += 1; // Paper beats Rock.
            console.log("\t\tPaper beats Rock.\t+1");
        }

    } else if (numb == 2) { // If user selected "Scissors" continue.
        if (CompDecision == "Rock") {
            innerScore -= 1; // Scissors loses to Rock.
            console.log("\t\tScissors loses to Rock.\t-1");
        } else if (CompDecision == "Paper") {
            innerScore += 1; // Scissors beats Paper.
            console.log("\t\tScissors beats Paper.\t+1");
        }
    }

    document.getElementById("Score").innerHTML = `Score: ${innerScore}`; // Corrected Class to ID & Typo with innerScore

}   // added "}" since it was missing