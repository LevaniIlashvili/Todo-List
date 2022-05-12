"use strict";
import './style.css';
import './task.svg';

function Todo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

const title = document.querySelector('#title');
const description = document.querySelector('#description');

const todoList = [];

// "add task" button
const todoModalBackground = document.querySelector('.new-todo-background');
const addTask = document.querySelector('.add-task');
addTask.addEventListener('click', () => {
        todoModalBackground.style.display = 'block';    
});

// close button of new todo
const closeTodo = document.querySelector('.new-todo-close');

closeTodo.addEventListener('click', () => {
    todoModalBackground.style.display = 'none';
});

// "add project" button
const projectModalBackground = document.querySelector('.new-project-background')
const addProject = document.querySelector('.add-project');
addProject.addEventListener('click', () => {
    projectModalBackground.style.display = 'block';
});

// close button of "add project"
const closeProject = document.querySelector('.new-project-close');

closeProject.addEventListener('click', () => {
    projectModalBackground.style.display = 'none';
})
