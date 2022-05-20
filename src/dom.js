"use strict";
import { projectList, createProject, removeAllChildNodes, createTask, todoList, compareDatesToday, 
        deleteTodo, compareDatesWeek } from "./index.js";
import { format } from 'date-fns';
import Edit from './edit.svg';
import trash from './trash-bin.svg';
import compareAsc from 'date-fns/compareAsc';


// home today week
const home = document.querySelector('#home');
const today = document.querySelector('#today');
const week = document.querySelector('#week');

// todo list
const displayTodoList = document.querySelector('.todo-list');

// create task modal:
const newTodoTitle = document.querySelector('#new-todo-title');
const newTodoDetails = document.querySelector('#new-todo-details');
const newTodoDueDate = document.querySelector('#new-todo-due-date');
const newTodoLow = document.querySelector('#new-todo-low');
const newTodoMedium = document.querySelector('#new-todo-medium');
const createTodo = document.querySelector('.create-todo');
const todoModalBackground = document.querySelector('.new-todo-background');
const closeTodo = document.querySelector('.new-todo-close');

// "add task button"
const addTaskBtn = document.querySelector('.add-task');

// details 
const todoDetailsModalBackground = document.querySelector('.details-modal-background');
const todoDetailsModal = document.querySelector('.details-modal');

// edit todo
const editModalBackground = document.querySelector('.edit-modal-background');
const closeTodoEdit = document.querySelector('.close-edit');
const editTodoTitle = document.querySelector('#edit-todo-title');
const editTodoDetails = document.querySelector('#edit-todo-details');
const editTodoDueDate = document.querySelector('#edit-todo-due-date');
const editTodoLow = document.querySelector('#edit-todo-low');
const editTodoMedium = document.querySelector('#edit-todo-medium');
const editTodoHigh = document.querySelector('#edit-todo-high');
const confirmEdit = document.querySelector('.edit-todo');

// delete todo
const deleteTodoIcon = document.querySelector('.delete-todo-icon');

// "add project" modal:
const projectModalBackground = document.querySelector('.new-project-background');
const addProjectBtn = document.querySelector('.add-project');
const closeProjectModal = document.querySelector('.new-project-close');
const createProjectBtn = document.querySelector('.create-project');
const newProjectTitle = document.querySelector('#new-project-title');

//project list
const displayProjectList = document.querySelector('.project-list');
const deleteProject = document.querySelector('project-delete');

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

// render projects to display
function renderProject() {
    removeAllChildNodes(displayProjectList);
    projectList.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project-div');
        displayProjectList.appendChild(projectDiv);
        const projectRadio = document.createElement('input');
        projectRadio.setAttribute('type', 'radio');
        projectRadio.setAttribute('name', 'sidebar');
        projectRadio.classList.add('project-radios');
        projectRadio.setAttribute('id', project.title);
        projectDiv.appendChild(projectRadio);
        const projectLabel = document.createElement('label');
        projectLabel.setAttribute('for', project.title);
        projectLabel.textContent = project.title;
        projectDiv.appendChild(projectLabel);
        const deleteProject = document.createElement('h4');
        deleteProject.classList.add('delete-project')
        deleteProject.textContent = 'x';
        projectDiv.appendChild(deleteProject);
    });
}

// render project list to display
createProjectBtn.addEventListener('click', () => {
    if(newProjectTitle.checkValidity()) {
        projectModalBackground.style.display = 'none';
        newProjectTitle.value = '';
        renderProject();
    };
});


// delete project
document.addEventListener('click', e => {
    if(e.target.classList.value === 'delete-project') {
        let project = projectList.find(project => project.title === e.target.parentNode.firstChild.id)
        projectList.splice(projectList.indexOf(project), 1);
        removeAllChildNodes(displayTodoList);
        removeAllChildNodes(displayProjectList);
        renderProject();
        project.todos.forEach(todo => {
            todoList.splice(todoList.indexOf(todo.title), 1);
        });
    }
});

// display todos of project
let currentProject;
document.addEventListener('click', e => {
    if(e.target.classList.value === 'project-radios') {
        addTaskBtn.style.display = 'block';
        removeAllChildNodes(displayTodoList);
        currentProject = e.target.getAttribute('id');
        let project = projectList.find(data => data.title === currentProject);
        renderTodos(project.todos);
        homeChecked = undefined;
        weekChecked = undefined;
        todayChecked = undefined;
    }
});


// add todo 
createTodo.addEventListener('click', (e) => {
    createTask();
});

// render todos to display
function renderTodos(list) {
    removeAllChildNodes(displayTodoList);
    list.forEach(task => {
        // add divs
        const todo = document.createElement('div');
        todo.classList.add('todo-container');
        if(currentProject !== undefined) {
            todo.setAttribute('id', currentProject);
        }
        displayTodoList.appendChild(todo);
        const todoTitleDiv = document.createElement('div');
        todoTitleDiv.classList.add('todo-title-div');
        todo.appendChild(todoTitleDiv);
        const todoSecondDiv = document.createElement('div');
        todoSecondDiv.setAttribute('id', task.title);
        todoSecondDiv.classList.add('todo-second-div');
        todo.appendChild(todoSecondDiv);
        // add border with priority color
        if(task.priority === 'low') {
            todo.style.borderLeft = 'solid 3px green';
        } else if(task.priority === 'medium') {
            todo.style.borderLeft = 'solid 3px orange';    
        } else {
            todo.style.borderLeft = 'solid 3px red';
        }
        // add title
        const title = document.createElement('p');
        title.classList.add('todo-title');
        title.textContent = task.title;
        todoTitleDiv.appendChild(title);
        // details btn
        const todoDetailsBtn = document.createElement('button');
        todoDetailsBtn.textContent = 'Details';
        todoDetailsBtn.classList.add('todo-details');
        todoSecondDiv.appendChild(todoDetailsBtn);
        // date
        const date = document.createElement('p');
        date.classList.add('todo-date');
        date.textContent = format(new Date(task.dueDate), "MMM " + "do");
        todoSecondDiv.appendChild(date);
        // edit 
        const edit = document.createElement('img');
        edit.setAttribute('src', Edit);
        edit.classList.add('edit-icon');
        todoSecondDiv.appendChild(edit);
        // delete
        const todoDelete = document.createElement('img');
        todoDelete.setAttribute('src', trash);
        todoDelete.classList.add('delete-todo-icon');
        todoSecondDiv.appendChild(todoDelete);
    });
}


createTodo.addEventListener('click', (e) => {
    if(currentProject !== undefined) {
        if(newTodoTitle.checkValidity() && newTodoDueDate.checkValidity()) {
            todoModalBackground.style.display = 'none';
            let project = projectList.find(data => data.title === currentProject);
            renderTodos(project.todos);
            newTodoTitle.value = '';
            newTodoDetails.value = '';
            newTodoDueDate.value = null;
        }
    } else {
        if(newTodoTitle.checkValidity() && newTodoDueDate.checkValidity()) {
            todoModalBackground.style.display = 'none';
            renderTodos(todoList);
            newTodoTitle.value = '';
            newTodoDetails.value = '';
            newTodoDueDate.value = null;
        }
    };
});

// show details
document.addEventListener('click', e => {
    if(e.target.classList.value === 'todo-details') {
        removeAllChildNodes(todoDetailsModal);
        // find obj in todoList
        let obj = todoList.find(data => data.title === e.target.parentNode.getAttribute('id'));
        todoDetailsModalBackground.style.display = 'block';
        // close btn
        const detailsClose = document.createElement('h1');
        detailsClose.textContent = 'x';
        detailsClose.classList.add('details-close');
        todoDetailsModal.appendChild(detailsClose);
        // header
        const detailsHeader = document.createElement('h1');
        detailsHeader.textContent = obj.title;
        todoDetailsModal.appendChild(detailsHeader);
        // priority
        const detailsPriority = document.createElement('p');
        detailsPriority.textContent = `Priority: ${obj.priority}`;
        todoDetailsModal.appendChild(detailsPriority);
        // due date
        const detailsDueDate = document.createElement('p');
        detailsDueDate.textContent = `Due Date: ${format(new Date(obj.dueDate), "MMMM " + "do "+ "y")}`;
        todoDetailsModal.appendChild(detailsDueDate);
        // details
        const detailsDetails = document.createElement('p');
        detailsDetails.textContent = `Details: ${obj.details}`;
        todoDetailsModal.appendChild(detailsDetails);
    };
});


// close details
document.addEventListener('click', e => {
    if(e.target.classList.value === 'details-close') {
        todoDetailsModalBackground.style.display = 'none';
    }
});

let homeChecked = 'checked';
// home btn
home.addEventListener('click', () => {
    addTaskBtn.style.display = 'block';
    removeAllChildNodes(displayTodoList);
    renderTodos(todoList);
    currentProject = undefined;
    homeChecked = 'checked';
    todayChecked = undefined;
    weekChecked = undefined;
});


let todayChecked;
let todayList;
today.addEventListener('click', () => {
    addTaskBtn.style.display = 'none';
    todayList = todoList.filter(todo => compareDatesToday(todo.dueDate));
    removeAllChildNodes(displayTodoList);
    renderTodos(todayList);
    todayChecked = 'checked';
    homeChecked = undefined;
    currentProject = undefined;
    weekChecked = undefined;
});

let weekChecked;
let weekList;
week.addEventListener('click', () => {
    addTaskBtn.style.display = 'none';
    weekList = todoList.filter(todo => compareDatesWeek(todo.dueDate));
    removeAllChildNodes(displayTodoList);
    renderTodos(weekList);
    todayChecked = undefined;
    homeChecked = undefined;
    currentProject = undefined;
    weekChecked = 'checked';
})

// edit btn
document.addEventListener('click', e => {
    if(e.target.classList.value === 'edit-icon') {
        // display details of todo to edit modal
        editModalBackground.style.display = 'block';
        let todo = todoList.find(data => data.title === e.target.parentNode.getAttribute('id'));
        editTodoTitle.value = todo.title;
        editTodoDetails.value = todo.details;
        editTodoDueDate.value = todo.dueDate;
        console.log(todo.priority);
        if(todo.priority === 'low') {
            editTodoLow.checked = true;   
        } else if(todo.priority === 'medium') {
            editTodoMedium.checked = true;
        } else {
            editTodoHigh.checked = true;
        };
        // set individual id
        confirmEdit.setAttribute('id', editTodoTitle.value);
    };  
});

confirmEdit.addEventListener('click', () => {
    if(projectList.find(data => data.title === currentProject)) {
        let project = projectList.find(data => data.title === currentProject);
        let projectTodo = project.todos.find(data => data.title === confirmEdit.getAttribute('id'));
        projectTodo.title = editTodoTitle.value;
        projectTodo.details = editTodoDetails.value;
        projectTodo.dueDate = editTodoDueDate.value;
        if(editTodoLow.checked) {
            projectTodo.priority = 'low';
        } else if(editTodoMedium.checked) {
            projectTodo.priority = 'medium';
        } else {
            projectTodo.priority = 'high';
        }
        editModalBackground.style.display = 'none';
        removeAllChildNodes(displayTodoList);
        renderTodos(project.todos);
    } else {
        let homeTodo = todoList.find(data => data.title === confirmEdit.getAttribute('id'));
        homeTodo.title = editTodoTitle.value;
        homeTodo.details = editTodoDetails.value;
        homeTodo.dueDate = editTodoDueDate.value;
        if(editTodoLow.checked) {
            homeTodo.priority = 'low';
        } else if(editTodoMedium.checked) {
            homeTodo.priority = 'medium';
        } else {
            homeTodo.priority = 'high';
        }
        editModalBackground.style.display = 'none';
        removeAllChildNodes(displayTodoList);
        renderTodos(todoList);
    }
});



closeTodoEdit.addEventListener('click', () => {
    editModalBackground.style.display = 'none';
});


// delete btn functional
document.addEventListener('click', e => {
    if(e.target.classList.value === 'delete-todo-icon') {
        // project da home mushaobs ertad, problema iqmneba todayistan
        if(currentProject !== undefined && currentProject !== '') {
            let project = projectList.find(data => data.title === currentProject);
            deleteTodo(e.target);
            removeAllChildNodes(displayTodoList);
            renderTodos(project.todos);
        } else if (homeChecked !== undefined && homeChecked !== ''){
            deleteTodo(e.target);
            removeAllChildNodes(displayTodoList);
            renderTodos(todoList);
        } else if(todayChecked !== undefined && todayChecked !== '') {
            deleteTodo(e.target);
            removeAllChildNodes(displayTodoList);
            renderTodos(todayList);
        } else if(weekChecked !== undefined){
            deleteTodo(e.target);
            removeAllChildNodes(displayTodoList);
            console.log(weekList);
            renderTodos(weekList);
        }
    }
});


export {newTodoTitle, newTodoDetails, newTodoDueDate, newTodoLow, newTodoMedium, newProjectTitle, 
        currentProject, todayList, weekList}





