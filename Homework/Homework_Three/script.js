function getTotal() {

    clearText("answer")
    let principle = parseFloat(document.getElementById("p").value);
    let rate = parseFloat(document.getElementById("r").value);
    let time = parseFloat(document.getElementById("t").value);

    let totalInterest = (principle * rate * time) / 100;
    let grandTotal = principle + totalInterest;


    document.querySelector("#answer").innerHTML = 
        `
            With a beginning Principle of $${principle} and 
            with a growth rate of ${rate}% for ${time}
            year(s), your total interest will be $${totalInterest.toFixed(2)} 
            with a grand total of $${grandTotal.toFixed(2)}
        `;
}

function clearText(id) {
    document.getElementById(id).innerHTML = "";
}

