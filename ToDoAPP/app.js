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

// find index of task we press in order to be able to mark it as done
console.log(items);
check.addEvemtlistener("click", () => {
    items.forEach(item => {

    });
});
