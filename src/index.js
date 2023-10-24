import './style.css';

import { createTodoList } from './tasks.js';

const enterBtn = document.querySelector('.fa-arrow-right-to-bracket');

enterBtn.addEventListener('click', () => createTodoList());