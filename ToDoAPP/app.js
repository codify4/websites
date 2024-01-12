let items = [];
const add = document.getElementById("add");
const todoConainer = document.querySelector(".todoConainer");


function addToDo(){

    const check = document.createElement("button");
    const task = document.createElement("div");

    items.push(add.value);
    items.forEach(item => {
        task.textContent = item;
        task.classList.add("task");
        check.classList.add("check");
        check.textContent = '✔';
    }); 
    todoConainer.append(task);
    task.appendChild(check);
}

check.addEvemtlistener("click", event => {
    event.target.remove();
});
