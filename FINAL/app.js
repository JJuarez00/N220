const users = [];

function createUser() {
    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();


    // Check if the username exists in the system
    const usernameExists = users.some(user => user.username === username);

    if (usernameExists) {
        alert("This username already exists. Please choose a different username.");
        document.getElementById("newUsername").value = "";
        document.getElementById("newPassword").value = "";

        return;
    }

    const user = {
        username: username,
        password: password,
    };
    
    users.push(user);

    // clear the input fields
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
    
    // display the updated user list in the console for testing
    console.log(users);
}

function login() {
    // check if user login exist if so load html page
}
