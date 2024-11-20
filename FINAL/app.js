const users = [];

function createUser() {
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;

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


// example: console.log(users[1].password) probbaly use later in something idk... ill see