// const input = document.querySelector('input');
// const enterBtn = document.querySelector('.fa-arrow-right-to-bracket');
// const todoList = document.querySelector('.todo-list');

// let clicked = false; // Define clicked variable

// function saveTodoList() {
//   const listItems = Array.from(todoList.querySelectorAll('.list'));
//   const tasks = listItems.map((item) => {
//     const taskText = item.querySelector('.task').textContent;
//     const isCompleted = item.querySelector('.check').checked;
//     return { text: taskText, completed: isCompleted };
//   });

//   localStorage.setItem('todoList', JSON.stringify(tasks));
// }

// function displayBtn(deleteButton, sideButton, taskSpan) {
//   if (clicked) {
//     deleteButton.style.display = 'none';
//     sideButton.style.display = 'block';
//     taskSpan.contentEditable = false;
//   } else {
//     deleteButton.style.display = 'block';
//     taskSpan.contentEditable = true;
//     taskSpan.focus();
//     sideButton.style.display = 'none';
//   }

//   clicked = !clicked;
// }

// export function createTodoList() {
//   const taskText = input.value.trim();

//   if (taskText !== '') {
//     const listItem = document.createElement('div');
//     listItem.className = 'list';

//     const listDiv = document.createElement('div');

//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.className = 'check';

//     const taskSpan = document.createElement('span');
//     taskSpan.className = 'task';
//     taskSpan.textContent = taskText;

//     const deleteButton = document.createElement('div');
//     deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
//     deleteButton.className = 'delete';

//     const sideButton = document.createElement('div');
//     sideButton.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
//     sideButton.className = 'side-btn';

//     listItem.addEventListener('dblclick', () => displayBtn(deleteButton, sideButton, taskSpan));

//     deleteButton.addEventListener('click', () => {
//       listItem.style.display = 'none';
//       saveTodoList();
//     });

//     listItem.addEventListener('keydown', (e) => {
//       if (e.key === 'Enter') {
//         displayBtn(deleteButton, sideButton, taskSpan);
//         saveTodoList();
//       }
//     });

//     listDiv.appendChild(checkbox);
//     listDiv.appendChild(taskSpan);

//     listItem.appendChild(listDiv);
//     listItem.appendChild(deleteButton);
//     listItem.appendChild(sideButton);

//     todoList.appendChild(listItem);
//     input.value = '';
//     saveTodoList();
//   }
// }

// function loadTodoList() {
//   const savedTasks = localStorage.getItem('todoList');
//   if (savedTasks) {
//     const tasks = JSON.parse(savedTasks);
//     tasks.forEach((task) => {
//       const listItem = document.createElement('div');
//       listItem.className = 'list';

//       const listDiv = document.createElement('div');

//       const checkbox = document.createElement('input');
//       checkbox.type = 'checkbox';
//       checkbox.className = 'check';
//       checkbox.checked = task.completed;

//       const taskSpan = document.createElement('span');
//       taskSpan.className = 'task';
//       taskSpan.textContent = task.text;

//       const deleteButton = document.createElement('div');
//       deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
//       deleteButton.className = 'delete';

//       const sideButton = document.createElement('div');
//       sideButton.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
//       sideButton.className = 'side-btn';

//       listItem.addEventListener('dblclick', () => displayBtn(deleteButton, sideButton, taskSpan)

//       deleteButton.addEventListener('click', () => {
//         listItem.style.display = 'none';
//         saveTodoList();
//       });

//       listItem.addEventListener('keydown', (e) => {
//         if (e.key === 'Enter') {
//           displayBtn(deleteButton, sideButton, taskSpan);
//           saveTodoList();
//         }
//       });

//       listDiv.appendChild(checkbox);
//       listDiv.appendChild(taskSpan);

//       listItem.appendChild(listDiv);
//       listItem.appendChild(deleteButton);
//       listItem.appendChild(sideButton);

//       todoList.appendChild(listItem);
//     });
//   }
// }

// loadTodoList();

// enterBtn.addEventListener('click', createTodoList);

// export default createTodoList;

// export { saveTodoList, displayBtn, loadTodoList };

const input = document.querySelector('input');
const todoList = document.querySelector('.todo-list');

let clicked = false; // Define clicked variable

function saveTodoList() {
  const listItems = Array.from(todoList.querySelectorAll('.list'));
  const tasks = listItems.map((item) => {
    const taskText = item.querySelector('.task').textContent;
    const isCompleted = item.querySelector('.check').checked;
    return { text: taskText, completed: isCompleted };
  });

  localStorage.setItem('todoList', JSON.stringify(tasks));
}

function displayBtn(deleteButton, sideButton, taskSpan) {
  if (clicked) {
    deleteButton.style.display = 'none';
    sideButton.style.display = 'block';
    taskSpan.contentEditable = false;
  } else {
    deleteButton.style.display = 'block';
    taskSpan.contentEditable = true;
    taskSpan.focus();
    sideButton.style.display = 'none';
  }

  clicked = !clicked;
}

export function createTodoList() {
  const taskText = input.value.trim();

  if (taskText !== '') {
    const listItem = document.createElement('div');
    listItem.className = 'list';

    const listDiv = document.createElement('div');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'check';

    const taskSpan = document.createElement('span');
    taskSpan.className = 'task';
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('div');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.className = 'delete';

    const sideButton = document.createElement('div');
    sideButton.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    sideButton.className = 'side-btn';

    listItem.addEventListener('dblclick', () => displayBtn(deleteButton, sideButton, taskSpan));

    deleteButton.addEventListener('click', () => {
      listItem.style.display = 'none';
      saveTodoList();
    });

    listItem.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        displayBtn(deleteButton, sideButton, taskSpan);
        saveTodoList();
      }
    });

    listDiv.appendChild(checkbox);
    listDiv.appendChild(taskSpan);

    listItem.appendChild(listDiv);
    listItem.appendChild(deleteButton);
    listItem.appendChild(sideButton);

    todoList.appendChild(listItem);
    input.value = '';
    saveTodoList();
  }
}

function loadTodoList() {
  const savedTasks = localStorage.getItem('todoList');
  if (savedTasks) {
    const tasks = JSON.parse(savedTasks);
    tasks.forEach((task) => {
      const listItem = document.createElement('div');
      listItem.className = 'list';

      const listDiv = document.createElement('div');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'check';
      checkbox.checked = task.completed;

      const taskSpan = document.createElement('span');
      taskSpan.className = 'task';
      taskSpan.textContent = task.text;

      const deleteButton = document.createElement('div');
      deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
      deleteButton.className = 'delete';

      const sideButton = document.createElement('div');
      sideButton.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
      sideButton.className = 'side-btn';

      listItem.addEventListener('dblclick', () => displayBtn(deleteButton, sideButton, taskSpan));

      deleteButton.addEventListener('click', () => {
        listItem.style.display = 'none';
        saveTodoList();
      });

      listItem.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          displayBtn(deleteButton, sideButton, taskSpan);
          saveTodoList();
        }
      });

      listDiv.appendChild(checkbox);
      listDiv.appendChild(taskSpan);

      listItem.appendChild(listDiv);
      listItem.appendChild(deleteButton);
      listItem.appendChild(sideButton);

      todoList.appendChild(listItem);
    });
  }
}

loadTodoList();

export default createTodoList;
