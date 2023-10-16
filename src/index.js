import "./style.css";

const input = document.querySelector("input");
const enterBtn = document.querySelector(".fa-arrow-right-to-bracket");
const todoList = document.querySelector(".todo-list");

function createTodoList() {
  const taskText = input.value.trim();

  if (taskText !== "") {
    const listItem = document.createElement("div");
    listItem.className = "list";

    const listDiv = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "check";

    const taskSpan = document.createElement("span");
    taskSpan.className = "task";
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement("div");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.className = "delete";

    const sideButton = document.createElement("div");
    sideButton.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    sideButton.className = "side-btn";

    let clicked = false;

    function displayBtn() {
      if (clicked) {
        deleteButton.style.display = "none";
        sideButton.style.display = "block";
        taskSpan.contentEditable = false;
      } else {
        deleteButton.style.display = "block";
        taskSpan.contentEditable = true;
        taskSpan.focus()
        sideButton.style.display = "none";
      }

      clicked = !clicked;
    }
    listItem.addEventListener("dblclick", displayBtn);

    deleteButton.addEventListener("click", function () {
      listItem.style.display = "none";
    });


    listItem.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        displayBtn();
        console.log(e.key)
      }
    });

    listDiv.appendChild(checkbox);
    listDiv.appendChild(taskSpan);

    listItem.appendChild(listDiv);
    listItem.appendChild(deleteButton);
    listItem.appendChild(sideButton);

    todoList.appendChild(listItem);
    input.value = "";
  }
}

enterBtn.addEventListener("click", createTodoList);
