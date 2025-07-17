const taskContainer = document.querySelector("#lista");

function getToDoList() {
    return JSON.parse(localStorage.getItem("Todo List")) || [];
}

function postToDoList(list) {
    localStorage.setItem("Todo List", JSON.stringify(list));
}

function renderList() {
    const toDoList = getToDoList();
    taskContainer.innerHTML = "";

    toDoList.forEach((entry, index) => {
        const row = document.createElement("tr");

        const taskCell = document.createElement("td");
        taskCell.textContent = entry.task;

        const priorityCell = document.createElement("td");
        const tagPriority = document.createElement("div");
        tagPriority.textContent = entry.priority;
        tagPriority.classList.add(`priority-${entry.priority}`)

        priorityCell.appendChild(tagPriority);

        const actionCell = document.createElement("td");
        const completeButton = document.createElement("button");
        completeButton.textContent = "Concluir";
        completeButton.title = "Concluir tarefa."
        completeButton.className = "btn btn-success btn-sm w-100";

        completeButton.addEventListener("click", () => {
            const updatedList = getToDoList();
            updatedList.splice(index, 1);
            postToDoList(updatedList);
            renderList();
        });

        actionCell.appendChild(completeButton);
        row.append(taskCell, priorityCell, actionCell);
        taskContainer.appendChild(row);
    });
}

document.getElementById('add-task-button').addEventListener("click", () => {
    const taskName = document.getElementById('task-name').value.trim();
    const taskPriority = document.getElementById('task-priority').value;

    if (!taskName || taskPriority === "") return;

    const toDoList  = getToDoList();
    toDoList.push({ task: taskName, priority: taskPriority });

    postToDoList(toDoList);

    document.getElementById('task-name').value = "";
    document.getElementById('task-priority').value = "";

    renderList();
});

document.getElementById('conclude-all').addEventListener("click", () => {
    postToDoList([]);
    renderList();
})