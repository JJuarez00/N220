// get username
const loggedInUser = localStorage.getItem("loggedInUser")

// if not logged return back to login page
if (!loggedInUser) {
    window.location.href = "index.html";
}

const message = document.getElementById("message");

message.innerHTML = `Welcome, <span class="userText">${loggedInUser}</span>!`;

function logOut() {
    // remove loggedInUser
    localStorage.removeItem("loggedInUser");

    // redirect back to login page
    window.location.href = "index.html";
}