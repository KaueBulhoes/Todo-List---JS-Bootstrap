let toDoList = [
    {
        task: "Teste",
        priority: "Alta",
    },
    {
        task: "Comprar pão",
        priority: "Média",
    },
    {
        task: "Jogar jogos",
        priority: "Baixa",
    }
];

const taskContainer = document.querySelector("#lista");

function renderList() {
    taskContainer.innerHTML = "";
    toDoList.forEach((entry, index) => {
        const taskRow = document.createElement("ul");
        taskRow.className = "row mb-0 ps-0";

        const taskItem = document.createElement("li");
        taskItem.className = "col border-end border-bottom p-1";
        taskItem.innerHTML = entry.task;

        const priorityItem = document.createElement("li");
        priorityItem.className = "col border-end border-bottom";
        priorityItem.innerHTML = entry.priority;

        const actionItem = document.createElement("li");
        actionItem.className = "col border-bottom";

        const completeButton = document.createElement("button");
        completeButton.textContent = "Concluir";
        completeButton.className = "btn btn-success btn-sm";

        completeButton.addEventListener("click", () => {
            toDoList.splice(index, 1);
            taskContainer.removeChild(taskRow);
        });

        actionItem.appendChild(completeButton);
        taskRow.appendChild(taskItem);
        taskRow.appendChild(priorityItem);
        taskRow.appendChild(actionItem);

        taskContainer.appendChild(taskRow);
    });
}

const btnAddTask = document.getElementById('add-task-button');
btnAddTask.addEventListener("click", () => {
    addTask();
})

function addTask() {
    const taskName = document.getElementById('task-name').value;
    const taskPriority = document.getElementById('task-priority').value;

    if (!taskName || taskPriority === "") return;

    const newTask = {
        task: taskName,
        priority: taskPriority
    }

    toDoList.push(newTask);
    renderList()
}