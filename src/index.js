"use strict";
import './style.css';
import './task.svg';
import {title, description, todoModalBackground, addTask, closeTodo, projectModalBackground, addProjectBtn,
    closeProjectModal} from './dom.js';



function Todo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

const todoList = [];

function Project(title) {
    this.title = title;
}

const projectList = [];

function createProject() {
    const title = new Project(newProjectTitle.value);  
    projectList.push(title);
}


export { projectList, createProject }





