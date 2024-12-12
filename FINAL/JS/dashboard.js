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


// load tasks
const tasksKey = `${loggedInUser}_tasks`;
let tasks = JSON.parse(localStorage.getItem(tasksKey)) || [];


// render tasks in the grid
function renderTasks() {
    const taskContainer = document.getElementById("taskContainer");

    taskContainer.innerHTML = ""; // clear previous tasks

    tasks.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "taskBox";

        // Set background color based on completion status
        taskDiv.style.backgroundColor = task.complete ? "#c8e8c6" : "#f3dcd3";

        taskDiv.innerHTML = `
            <h3>${task.name}</h3>
            <p>
                <select class="typeTXT" onchange="updateTaskType(${index}, this.value)">
                    <option value="Home" ${task.type === "Home" ? "selected" : ""}>Home</option>
                    <option value="Work" ${task.type === "Work" ? "selected" : ""}>Work</option>
                    <option value="School" ${task.type === "School" ? "selected" : ""}>School</option>
                    <option value="Other" ${task.type === "Other" ? "selected" : ""}>Other</option>
                </select>
            </p>
            <p>
                <input type="checkbox" ${task.complete ? "checked" : ""} onchange="toggleComplete(${index})"> Complete
            </p>
            <div class="BTNholder">
                <button class="edit" onclick="editTask(${index})">Edit</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskContainer.appendChild(taskDiv);
    });
}


// function to update the task type when the dropdown is changed
function updateTaskType(index, newType) {
    tasks[index].type = newType; // update the type in the array
    localStorage.setItem(tasksKey, JSON.stringify(tasks)); // save the updated array to localStorage
}


// add a new task
function addTask() {
    const taskName = document.getElementById("taskName").value.trim();
    const taskType = document.getElementById("taskType").value;

    if (!taskName) {
        alert("Task name cannot be empty.");
        return;
    }

    const newTask = {
        name: taskName,
        type: taskType,
        complete: false
    };

    tasks.push(newTask);
    localStorage.setItem(tasksKey, JSON.stringify(tasks));
    renderTasks();

    // reset the input fields
    document.getElementById("taskName").value = "";
    document.getElementById("taskType").value = "Home"; // "Home" is default value 
}


// toggle task completion
function toggleComplete(index) {
    tasks[index].complete = !tasks[index].complete;
    localStorage.setItem(tasksKey, JSON.stringify(tasks));
    renderTasks();
}


// edit a task
function editTask(index) {
    const newName = prompt("Enter new task name:", tasks[index].name);
    const newType = prompt("Enter new task type (Home, Work, School, Other):", tasks[index].type);

    if (newName && newType) {
        tasks[index].name = newName.trim();
        tasks[index].type = newType.trim();
        localStorage.setItem(tasksKey, JSON.stringify(tasks));
        renderTasks();
    }
}


// delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem(tasksKey, JSON.stringify(tasks));
    renderTasks();
}


// function to view tasks in the console
function viewTasks() {
    console.log(tasks);
}

// call render
renderTasks()