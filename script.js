document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        let taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("add text please!");
            return;
        }

        let li = document.createElement("li");
        li.innerText = taskText;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    });
});