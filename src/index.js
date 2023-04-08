//Waits for the DOM to load first
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        buildToDo(e.target.new_task_description.value);
        form.reset();
    });
});

//Function that takes a Task
function buildToDo(todo) {
    let p = document.createElement("P");
    let btn = document.createElement("button");
    btn.addEventListener("click", handleDelete);
    p.textContent = `${todo} `;
    btn.textContent = "X";
    p.appendChild(btn);
    document.querySelector("#list").appendChild(p);
}

//Function that deletes a Task
function handleDelete(e) {
    e.target.parentNode.remove();
}
