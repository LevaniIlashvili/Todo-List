"use strict";
import { projectList, createProject, removeAllChildNodes, createTask, todoList } from "./index.js";
// todo list
const displayTodoList = document.querySelector('.todo-list');

// create task modal:
const newTodoTitle = document.querySelector('#new-todo-title');
const newTodoDetails = document.querySelector('#new-todo-details');
const newTodoDueDate = document.querySelector('#new-todo-due-date');
const newTodoPriority = document.querySelector('#new-todo-priority');
const newTodoLow = document.querySelector('#new-todo-low');
const newTodoMedium = document.querySelector('#new-todo-medium');
const newTodoHigh = document.querySelector('#new-todo-high');
const createTodo = document.querySelector('.create-todo');
const todoModalBackground = document.querySelector('.new-todo-background');
const closeTodo = document.querySelector('.new-todo-close');

// "add task button"
const addTaskBtn = document.querySelector('.add-task');

// "add project" modal:
const projectModalBackground = document.querySelector('.new-project-background')
const addProjectBtn = document.querySelector('.add-project');
const closeProjectModal = document.querySelector('.new-project-close');
const createProjectBtn = document.querySelector('.create-project');
const newProjectTitle = document.querySelector('#new-project-title');

//project list
const displayProjectList = document.querySelector('.project-list');

export {newTodoTitle, newTodoDetails, newTodoDueDate, newTodoPriority, newTodoLow, newTodoMedium,
        newTodoHigh, createTodo, todoModalBackground, addTaskBtn, closeTodo, projectModalBackground,
        addProjectBtn,closeProjectModal, newProjectTitle}

 // "add task" button
addTaskBtn.addEventListener('click', () => {
    todoModalBackground.style.display = 'block';    
});

// close button of todo modal
closeTodo.addEventListener('click', () => {
    todoModalBackground.style.display = 'none';
});

// "add project" button
addProjectBtn.addEventListener('click', () => {
    projectModalBackground.style.display = 'block';
});

// close button of "add project"
closeProjectModal.addEventListener('click', () => {
    projectModalBackground.style.display = 'none';
});

// add project to list
createProjectBtn.addEventListener('click', () => {
        createProject();
});

// render project list to display
createProjectBtn.addEventListener('click', () => {
    if(newProjectTitle.checkValidity()) {
        projectModalBackground.style.display = 'none';
        newProjectTitle.value = '';
        removeAllChildNodes(displayProjectList);
        projectList.forEach(project => {
            const projectRadio = document.createElement('input');
            projectRadio.setAttribute('type', 'radio');
            projectRadio.setAttribute('name', 'project-radios');
            projectRadio.setAttribute('id', project.title);
            displayProjectList.appendChild(projectRadio);
            const projectLabel = document.createElement('label');
            projectLabel.setAttribute('for', project.title);
            projectLabel.textContent = project.title;
            displayProjectList.appendChild(projectLabel);
        });
    };
});


// add todo to todolist
createTodo.addEventListener('click', () => {
    createTask();
});

// renter todos to display
createTodo.addEventListener('click', () => {
    todoModalBackground.style.display = 'none';
    removeAllChildNodes(displayTodoList);
    todoList.forEach(task => {
        const todo = document.createElement('div');
        todo.classList.add('todo-container');
        displayTodoList.appendChild(todo);
        if(task.priority === 'low') {
            todo.style.borderLeft = 'solid 3px green';
        } else if(task.priority === 'medium') {
            todo.style.borderLeft = 'solid 3px orange';    
        } else {
            todo.style.borderLeft = 'solid 3px red';
        }
        const title = document.createElement('p');
        title.classList.add('todo-title');
        title.textContent = task.title;
        todo.appendChild(title);
    });
});


