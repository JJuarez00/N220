let d = 1;
document.querySelector("#decisionID").innerHTML += `${d}`;

function yes() {
  d += 1;
  document.querySelector("#decisionID").textContent = d;
  checkID();
}

function no() {
  d += 2;
  document.querySelector("#decisionID").textContent = d;
  checkID();
}

function checkID() {
    if (d > 15) {
        d = 1;
        document.querySelector("#decisionID").textContent = d;
        checkID(); // reset
    } else if (d === 1) {
        document.querySelector("#text").innerHTML = `You wake up in a dark room, hands bound. Do you try to free yourself?`;
    } else if (d % 2 === 0) {
        if (d === 2) {
            document.querySelector("#text").innerHTML = `You manage to loosen the ropes. Do you want to look around the room for an escape?`;
            d++;
        } else if (d === 4) {
            document.querySelector("#text").innerHTML = `You see a window, and walk to it causing noise, do you try to open the window?`;
            d += 3;
        } else if (d === 6) {
            document.querySelector("#text").innerHTML = `A guard hears your call and approaches. Do you try to reason with them by being overdramatic?`;
            d += 5;
        } else if (d === 8) { // possible ending.
            document.querySelector("#text").innerHTML = `The window opens easily, and you climb out, escaping into the night.`;
            removeButton();
            countDown();
        } else if (d === 10) { // possible ending.
            document.querySelector("#text").innerHTML = `The guard enters the room and doesn't see you. You take the chance to quickly escape through the door without a problem.`;
            removeButton();
        } else if (d === 12) { // possible ending.
            document.querySelector("#text").innerHTML = `The guard seems sympathetic and loosens your restraints. You seize the opportunity to escape.`;
            removeButton();
        } else if (d === 14) { // possible ending.
            document.querySelector("#text").innerHTML = `You attempt to fight but he knocks you out cold, and ties you back up.`;
            removeButton();
        };
    } else {
        if (d === 3) {
            document.querySelector("#text").innerHTML = `You decide to wait. After a while, you hear footsteps approaching. Do you call out for help?`;
            d += 2;
        } else if (d === 5) {
            document.querySelector("#text").innerHTML = `You decide not to, but suddenly someone outside the door. Do you hide?`;
            d += 4;
        } else if (d === 7) {
            document.querySelector(
              "#text"
            ).innerHTML = `You stay silent as the guard enters. You suddenly free yourself since the rope was pretty frail. Do you attack the guard?`;
            d += 6;
        } else if (d === 9) { // possible ending.
            document.querySelector("#text").innerHTML = `The noise you made caught the attention of the guard, and you're tied up again!`;
            removeButton();
        } else if (d === 11) { // possible ending.
            document.querySelector("#text").innerHTML = `Guard sees you, and ties you back up.`;
            removeButton();
        } else if (d === 13) { // possible ending.
            document.querySelector("#text").innerHTML = `You are dull and loud, so the guard knocks you out.`;
            removeButton();
        } else if (d === 15) { // possible ending.
            document.querySelector("#text").innerHTML = `You decide to run out the door, and successfully escape.`;
            removeButton();
        };
    };
};


function removeButton() {
    document.querySelector("#yes").style.display = "none";
    document.querySelector("#no").style.display = "none";
};

function countDown() {
    let countHTML = 3;
    let count = 4;
    document.querySelector("#countDown").innerHTML = `<p class="reset">${countHTML}</p>`; 

    let interval = setInterval(() => {
        count--;
        countHTML--;
        
        if (count > 1) {
            document.querySelector("#countDown").innerHTML = `<p class="reset">${countHTML}</p>`;
        } else if (count === 1) {
            document.querySelector("#countDown").innerHTML = `<p class="reset">Resetting</p>`;
        } else if (count === 0) {
            clearInterval(interval); // stop countdown.
            location.reload(); // reload page to reset story.
        }
    }, 1000); // speed of countdown (set to 1 sec).
}
