function addTask() {
    var taskInput = document.getElementById("taskInput");

    var taskText = taskInput.value;

    if (taskText.trim() !== "") {
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function displayTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (tasks.length === 0) {
        taskList.innerHTML = "<p>No tasks found!</p>";
    } else {
        tasks.forEach(function(task, index) {
            var li = document.createElement("li");
            li.textContent = task;
            li.innerHTML += '<button class="delete-btn" onclick="deleteTask(' + index + ')">X</button>';
            taskList.appendChild(li);
        });
    }
}

function deleteTask(index) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function clearStorage() {
    localStorage.removeItem("tasks");
    displayTasks();
}