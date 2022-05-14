"use strict";
import './style.css';
import './task.svg';
import {newTodoTitle, newTodoDetails, newTodoDueDate, newTodoPriority, newTodoLow, newTodoMedium,
        newTodoHigh, createTodo, todoModalBackground, addTask, closeTodo, projectModalBackground, 
        addProjectBtn, closeProjectModal, newProjectTitle} from './dom.js';



function Project(title) {
    this.title = title;
};

const projectList = [];

function createProject() {
    if(newProjectTitle.checkValidity()) {
        const title = new Project(newProjectTitle.value);
        projectList.push(title);
    };
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

function Todo(title, details, dueDate, priority, done) {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = done;
};

const todoList = [];

function createTask() {
    let priority;
    if(newTodoLow.checked) {
        priority = 'low';
    } else if(newTodoMedium.checked) {
        priority = 'medium';
    } else {
        priority = 'high';
    }
    if(newTodoTitle.checkValidity() && newTodoDueDate.checkValidity()) {
        const task = new Todo(newTodoTitle.value, newTodoDetails.value, newTodoDueDate.value, priority, 'no');
        todoList.push(task);
    }
    console.log(todoList);
};


export { projectList, createProject, removeAllChildNodes, createTask, todoList }





