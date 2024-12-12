// store users in localStorage
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
}

// create user button onClick
function createUser() {
    const newUsername = document.getElementById("newUsername").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();
    const message = document.getElementById("message");
    
    // fetch existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users"));
    
    // clear text
    message.textContent = "";
    
    // make sure input fields arent empty
    if (!newUsername || !newPassword) {
        message.textContent = "Make sure no fields are empty!";
        return;
    }

    // check if the username already exists
    if ((usernameExists = users.some((user) => user.username === newUsername))) {
        message.textContent = "This username already exists. Please choose a different username.";
        document.getElementById("newUsername").value = "";
        document.getElementById("newPassword").value = "";
        return;
    }

    const errors = [];
    // 1. Must contain at least ONE capital letter
    if (!/[A-Z]/.test(newPassword)) {
      errors.push("Make sure there is a capital letter in your password!");
    }

    // 2. Must contain at least ONE number
    if (!/[0-9]/.test(newPassword)) {
      errors.push("Make sure there is a number in your password!");
    }

    // 3. Must be 8 characters or greater
    if (newPassword.length < 8) {
      errors.push("Make sure your password is at least 8 characters long!");
    }

    // Show validation errors if any
    if (errors.length > 0) {
      message.innerHTML = errors.join("<br>");
      return;
    }

    // add the new user
    const user = {
        username: newUsername,
        password: newPassword,
    }
    
    // add user to users list
    users.push(user);

    // save updated users list to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // clear the input fields
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";

    message.textContent = "Account successfully created!";
}

// login Button onClick
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
        
        // store username for dashboard use
        localStorage.setItem("loggedInUser", username);
        window.location.href = "dashboard.html";
    } else {
        message.textContent = "Invalid username or password. Please try again.";
    }
}

// this onClick is here is look at the users.
function checkUsers() {
  const users = JSON.parse(localStorage.getItem("users"));
  console.log(users);
}

// this onClick is here to delete all the users.
function deleteAllUsers() {

  // clear the users list
  localStorage.setItem("users", JSON.stringify([]));

  console.log("All users deleted."); // For debugging, remove later
}
