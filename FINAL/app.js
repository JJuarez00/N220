// store users in localStorage
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
}

// create user button
function createUser() {
    const newUsername = document.getElementById("newUsername").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();
    const message = document.getElementById("message");

    // fetch existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users"));

    // clear text
    message.textContent = "";

    // check if the username already exists
    if (usernameExists = users.some(user => user.username === newUsername)) {
        message.textContent = "This username already exists. Please choose a different username.";
        document.getElementById("newUsername").value = "";
        document.getElementById("newPassword").value = "";
        return;
    }

    // add the new user
    const user = {
        username: newUsername,
        password: newPassword,
    };

    // add user to users list
    users.push(user);

    // save updated users list to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // clear the input fields
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";

    message.textContent = "Account successfully created!";
    
    console.log(users); // for debugging, remove later
}

// login Button
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    // clear text
    message.textContent = "";

    // fetch users from localStorage
    const users = JSON.parse(localStorage.getItem("users"));

    // check if user exists and check if passwords align
    if (users.find(user => user.username === username && user.password === password)) {
        
        window.location.href = "dashboard.html";
    } else {
        message.textContent = "Invalid username or password. Please try again.";
    }
}
