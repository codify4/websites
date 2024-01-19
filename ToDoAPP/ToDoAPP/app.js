let items = [];
const todoContainer = document.querySelector(".todoContainer");
const taskContainer = document.querySelector(".taskContainer");

function addToDo(){

    const check = document.createElement("button");
    const task = document.createElement("div");
    const add = document.getElementById("add").value;

    items.push(add);

    task.classList.add("task");
    task.textContent = add;
    task.style.top = "20%"

    check.classList.add("check");
    check.textContent = '✔';

    taskContainer.append(task);
    task.appendChild(check);

    check.onclick = () => {
        taskContainer.removeChild(task);
    };

    todoContainer.scrollTop = todoContainer.scrollHeight;
}