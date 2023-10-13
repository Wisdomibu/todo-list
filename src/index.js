import './style.css';

const todoList = document.querySelector('.todo-list');
const tasks = [
  {
    description: 'check my engine',
    completed: false,
    index: 1,
  },
  {
    description: 'wash my clothes',
    completed: false,
    index: 2,
  },
  {
    description: 'clean my house',
    completed: false,
    index: 3,
  },
  {
    description: 'write a book',
    completed: false,
    index: 4,
  },
];

const taskIteration = () => {
  checkboxList.innerHTML = '';
  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.innerText = task.description;
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    const ulContainer = document.createElement('div');
    ulContainer.className = 'ulContainer';
    const ul = document.createElement('ul');
    ul.className = 'gap';
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-ellipsis-vertical';
    ul.append(checkBox, listItem);
    ulContainer.append(ul, icon);
    todoList.append(ulContainer);
  });
};
taskIteration();