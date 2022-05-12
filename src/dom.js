"use strict";
import { projectList, createProject } from "./index.js";

// create task modal:
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const todoModalBackground = document.querySelector('.new-todo-background');
const closeTodo = document.querySelector('.new-todo-close');

// "add task button"
const addTask = document.querySelector('.add-task');

// add project modal:
const projectModalBackground = document.querySelector('.new-project-background')
const addProjectBtn = document.querySelector('.add-project');
const closeProjectModal = document.querySelector('.new-project-close');

//project list
const displayProjectList = document.qeuerySelector('.project-list');

export {title, description, todoModalBackground, addTask, closeTodo, projectModalBackground, addProjectBtn,
 closeProject}

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

// render project list to display
createProjectBtn.addEventListener('click', () => {
    if(newProjectTitle.checkValidity()) {
        createProject();
        console.log(projectList);
        projectList.forEach(project => console.log('yveri'));
    }
});


