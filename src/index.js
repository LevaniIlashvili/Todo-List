"use strict";
import './style.css';
import './task.svg';
import add from 'date-fns/add';
import isBefore from 'date-fns/isBefore'
import isAfter from 'date-fns/isAfter';
import isEqual from 'date-fns/isEqual';
import set from 'date-fns/set';
import parseISO from 'date-fns/parseISO';
import {newTodoTitle, newTodoDetails, newTodoDueDate, newTodoLow, newTodoMedium, newProjectTitle, 
        currentProject, todayList, weekList} from './dom.js';
import { parse } from 'date-fns';



function Project(title) {
    this.title = title;
    this.todos = [];
};

const projectList = [];

function createProject() {
    if(!localStorage.getItem('projectList')) {
        localStorage.setItem('projectList', JSON.stringify([]));
    } 
    let storageProjectList = localStorage.getItem('projectList');
    storageProjectList = JSON.parse(storageProjectList);
    if(storageProjectList.find(project => project.title === newProjectTitle.value)) {
        newProjectTitle.setCustomValidity('Project with this title already exists');
    } else {
        newProjectTitle.setCustomValidity('');
        if(newProjectTitle.checkValidity()) {
            const title = new Project(newProjectTitle.value);
            storageProjectList.push(title);
            localStorage.setItem('projectList', JSON.stringify(storageProjectList));;
        };
    }
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


function createTask() {
    if(!localStorage.getItem('todoList')) {
        localStorage.setItem('todoList', JSON.stringify([]));
    }
    if(!localStorage.getItem('projectList')) {
        localStorage.setItem('projectList', JSON.stringify([]));
    } 
    let storageTodoList = localStorage.getItem('todoList');
    storageTodoList = JSON.parse(storageTodoList);
    let storageProjectList = localStorage.getItem('projectList');
    storageProjectList = JSON.parse(storageProjectList);
    let priority;
    if(newTodoLow.checked) {
        priority = 'low';
    } else if(newTodoMedium.checked) {
        priority = 'medium';
    } else {
        priority = 'high';
    }
    if(storageTodoList.find(todo => todo.title === newTodoTitle.value)) {
        newTodoTitle.setCustomValidity('Todo with this title already exists');
    } else {
        newTodoTitle.setCustomValidity('');
        if(newTodoTitle.checkValidity() && newTodoDueDate.checkValidity()) {
            const task = new Todo(newTodoTitle.value, newTodoDetails.value, newTodoDueDate.value, priority, 'no');
            if(currentProject !== undefined) {
                let project = storageProjectList.find(data => data.title === currentProject);
                project.todos.push(task);
                localStorage.setItem('projectList', JSON.stringify(storageProjectList));
            }
            storageTodoList.push(task);
            localStorage.setItem('todoList', JSON.stringify(storageTodoList));
        }
    }
};

function compareDatesToday(todoDate) {
    let result = isEqual(set(new Date(), { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }), set(new Date(todoDate), { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }));
    return result;
}

function compareDatesWeek(todoDate) {
    if(isAfter(parseISO(todoDate), new Date()) && isBefore(parseISO(todoDate), add(new Date(), { days: 7 }))) {
        return true;
    }
}

function deleteTodo(deleteBtn) {
    let storageProjectList = localStorage.getItem('projectList');
    storageProjectList = JSON.parse(storageProjectList);
    storageProjectList.forEach(project => {
        project.todos.forEach(todo => {
            if(deleteBtn.parentNode.id === todo.title) {
                project.todos.splice(project.todos.indexOf(todo), 1);
                localStorage.setItem('projectList', JSON.stringify(storageProjectList));
            }
        })
    });
    let storageTodoList = localStorage.getItem('todoList');
    storageTodoList = JSON.parse(storageTodoList);
    let homeTodo = storageTodoList.find(data => data.title === deleteBtn.parentNode.id);
    storageTodoList.splice(storageTodoList.indexOf(homeTodo), 1);
    localStorage.setItem('todoList', JSON.stringify(storageTodoList));
    if(todayList) {
        let todayTodo = todayList.find(data => data.title === deleteBtn.parentNode.id)
        todayList.splice(todayList.indexOf(todayTodo), 1);
    } 
    if(weekList) {
        console.log('yveri')
        let weekTodo = weekList.find(data => data.title === deleteBtn.parentNode.id)
        weekList.splice(weekList.indexOf(weekTodo), 1);       
    }
}


export { createProject, removeAllChildNodes, createTask, compareDatesToday,
        deleteTodo, compareDatesWeek }





