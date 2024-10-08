

const list = [];

// addItem function:
//      Gets the input from "item"
//      Adds it to the list of todo items
//      Updates the "list" ul tag to show all the items currently in the list
//      - Each item should be shown added as a li tag in the string ("<li>" + item + "</li>" or `<li>${item}</li>`)
function addItem() {
    document.querySelector("#list").innerHTML = ``;
    const item = document.getElementById("item").value;
    list.push(item);
    for (let i = 0; i < list.length; i++) {
    document.querySelector("#list").innerHTML += `<li>${list[i]}</li>`;
    };
};




// Create the summarizeList function that outputs the following to the summary p tag
// - these lines should be split with br tags ("<br />")
// "Total Items: "
// - This should show the total number of items in the list
// "First Item: "
// - This should show the first item in the list
// "Last Item: "
// - This should show the last item in the list. If the list has only 1 item then this will be the same as the first item.


function summarizeList() {


    document.querySelector("#summary").innerHTML += `
    Total Items: ${list.length}
    <br/>
    First Item: ${list[0]}
    <br/>
    Last Item: ${list[list.length-1]}
    `;
};