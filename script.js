const inp = document.querySelector("input");
const add = document.querySelector("#add");
const todoBox  = document.querySelector(".todo-list");

add.addEventListener("click", () => {
    const value = inp.value;

    if(value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    todoBox.innerHTML += `<div class="li">
                    <h3>${value}</h3>

                    <div>
                        <button class="btn edit">Edit</button>
                        <button class="btn del">Delete</button>
                    </div>
                </div>`
    inp.value = "";
});