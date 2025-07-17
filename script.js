let toDoList = [
    { task: "Teste", priority: "Alta" },
    { task: "Comprar pão", priority: "Média" },
    { task: "Jogar jogos", priority: "Baixa" }
];

const taskContainer = document.querySelector("#lista");

function renderList() {
    taskContainer.innerHTML = "";

    toDoList.forEach((entry, index) => {
        const row = document.createElement("tr");

        const taskCell = document.createElement("td");
        taskCell.textContent = entry.task;

        const priorityCell = document.createElement("td");
        priorityCell.textContent = entry.priority;

        const actionCell = document.createElement("td");
        const completeButton = document.createElement("button");
        completeButton.textContent = "Concluir";
        completeButton.className = "btn btn-success btn-sm w-100";

        completeButton.addEventListener("click", () => {
            toDoList.splice(index, 1);
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

    toDoList.push({ task: taskName, priority: taskPriority });
    document.getElementById('task-name').value = "";
    document.getElementById('task-priority').value = "";
    renderList();
});

document.getElementById('conclude-all').addEventListener("click", () => {
    taskContainer.innerHTML = "";
})