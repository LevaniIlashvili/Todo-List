import { format } from "date-fns";
import {
  createProject, removeAllChildNodes, createTask, compareDatesToday,
  deleteTodo, compareDatesWeek,
} from "./index.js";
import Edit from "./edit.svg";
import trash from "./trash-bin.svg";

// home today week
const home = document.querySelector("#home");
const today = document.querySelector("#today");
const week = document.querySelector("#week");

// todo list
const displayTodoList = document.querySelector(".todo-list");

// create task modal:
const newTodoTitle = document.querySelector("#new-todo-title");
const newTodoDetails = document.querySelector("#new-todo-details");
const newTodoDueDate = document.querySelector("#new-todo-due-date");
const newTodoLow = document.querySelector("#new-todo-low");
const newTodoMedium = document.querySelector("#new-todo-medium");
const createTodo = document.querySelector(".create-todo");
const todoModalBackground = document.querySelector(".new-todo-background");
const closeTodo = document.querySelector(".new-todo-close");

// "add task button"
const addTaskBtn = document.querySelector(".add-task");

// details
const todoDetailsModalBackground = document.querySelector(".details-modal-background");
const todoDetailsModal = document.querySelector(".details-modal");

// edit todo
const editModalBackground = document.querySelector(".edit-modal-background");
const closeTodoEdit = document.querySelector(".close-edit");
const editTodoTitle = document.querySelector("#edit-todo-title");
const editTodoDetails = document.querySelector("#edit-todo-details");
const editTodoDueDate = document.querySelector("#edit-todo-due-date");
const editTodoLow = document.querySelector("#edit-todo-low");
const editTodoMedium = document.querySelector("#edit-todo-medium");
const editTodoHigh = document.querySelector("#edit-todo-high");
const confirmEdit = document.querySelector(".edit-todo");

// "add project" modal:
const projectModalBackground = document.querySelector(".new-project-background");
const addProjectBtn = document.querySelector(".add-project");
const closeProjectModal = document.querySelector(".new-project-close");
const createProjectBtn = document.querySelector(".create-project");
const newProjectTitle = document.querySelector("#new-project-title");

// project list
const displayProjectList = document.querySelector(".project-list");

// "add task" button
addTaskBtn.addEventListener("click", () => {
  todoModalBackground.style.display = "block";
});

// close button of todo modal
closeTodo.addEventListener("click", () => {
  todoModalBackground.style.display = "none";
});

// "add project" button
addProjectBtn.addEventListener("click", () => {
  projectModalBackground.style.display = "block";
});

// close button of "add project"
closeProjectModal.addEventListener("click", () => {
  projectModalBackground.style.display = "none";
});

// add project to list
createProjectBtn.addEventListener("click", () => {
  createProject();
});

// render projects to display
function renderProject() {
  removeAllChildNodes(displayProjectList);
  let storageProjectList = localStorage.getItem("projectList");
  storageProjectList = JSON.parse(storageProjectList);
  storageProjectList.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");
    displayProjectList.appendChild(projectDiv);
    const projectRadio = document.createElement("input");
    projectRadio.setAttribute("type", "radio");
    projectRadio.setAttribute("name", "sidebar");
    projectRadio.classList.add("project-radios");
    projectRadio.setAttribute("id", project.title);
    projectDiv.appendChild(projectRadio);
    const projectLabel = document.createElement("label");
    projectLabel.setAttribute("for", project.title);
    projectLabel.textContent = project.title;
    projectDiv.appendChild(projectLabel);
    const deleteProject = document.createElement("h4");
    deleteProject.classList.add("delete-project");
    deleteProject.textContent = "x";
    projectDiv.appendChild(deleteProject);
  });
}

if (localStorage.getItem("projectList")) {
  renderProject();
}

// render project list to display
createProjectBtn.addEventListener("click", () => {
  if (newProjectTitle.checkValidity()) {
    projectModalBackground.style.display = "none";
    newProjectTitle.value = "";
    renderProject();
  }
});

// delete project
document.addEventListener("click", (e) => {
  if (e.target.classList.value === "delete-project") {
    let storageProjectList = localStorage.getItem("projectList");
    storageProjectList = JSON.parse(storageProjectList);
    const project = storageProjectList.find((projectTitle) => projectTitle.title
    === e.target.parentNode.firstChild.id);
    storageProjectList.splice(storageProjectList.indexOf(project), 1);
    localStorage.setItem("projectList", JSON.stringify(storageProjectList));
    removeAllChildNodes(displayTodoList);
    removeAllChildNodes(displayProjectList);
    renderProject();
    project.todos.forEach((todo) => {
      let storageTodoList = localStorage.getItem("todoList");
      storageTodoList = JSON.parse(storageTodoList);
      storageTodoList.splice(storageTodoList.indexOf(todo.title), 1);
      localStorage.setItem("todoList", JSON.stringify(storageTodoList));
    });
  }
});

let currentProject;
let weekChecked;
let weekList;
let homeChecked = "checked";
let todayChecked;
let todayList;

// render todos to display
function renderTodos(list) {
  removeAllChildNodes(displayTodoList);
  list.forEach((task) => {
    // add divs
    const todo = document.createElement("div");
    todo.classList.add("todo-container");
    if (currentProject !== undefined) {
      todo.setAttribute("id", currentProject);
    }
    displayTodoList.appendChild(todo);
    const todoTitleDiv = document.createElement("div");
    todoTitleDiv.classList.add("todo-title-div");
    todo.appendChild(todoTitleDiv);
    const todoSecondDiv = document.createElement("div");
    todoSecondDiv.setAttribute("id", task.title);
    todoSecondDiv.classList.add("todo-second-div");
    todo.appendChild(todoSecondDiv);
    // add border with priority color
    if (task.priority === "low") {
      todo.style.borderLeft = "solid 3px green";
    } else if (task.priority === "medium") {
      todo.style.borderLeft = "solid 3px orange";
    } else {
      todo.style.borderLeft = "solid 3px red";
    }
    // add title
    const title = document.createElement("p");
    title.classList.add("todo-title");
    title.textContent = task.title;
    todoTitleDiv.appendChild(title);
    // details btn
    const todoDetailsBtn = document.createElement("button");
    todoDetailsBtn.textContent = "Details";
    todoDetailsBtn.classList.add("todo-details");
    todoSecondDiv.appendChild(todoDetailsBtn);
    // date
    const date = document.createElement("p");
    date.classList.add("todo-date");
    date.textContent = format(new Date(task.dueDate), "MMM " + "do");
    todoSecondDiv.appendChild(date);
    // edit
    const edit = document.createElement("img");
    edit.setAttribute("src", Edit);
    edit.classList.add("edit-icon");
    todoSecondDiv.appendChild(edit);
    // delete
    const todoDelete = document.createElement("img");
    todoDelete.setAttribute("src", trash);
    todoDelete.classList.add("delete-todo-icon");
    todoSecondDiv.appendChild(todoDelete);
  });
}

// display todos of project
document.addEventListener("click", (e) => {
  if (e.target.classList.value === "project-radios") {
    let storageProjectList = localStorage.getItem("projectList");
    storageProjectList = JSON.parse(storageProjectList);
    addTaskBtn.style.display = "block";
    removeAllChildNodes(displayTodoList);
    currentProject = e.target.getAttribute("id");
    const project = storageProjectList.find((data) => data.title === currentProject);
    renderTodos(project.todos);
    homeChecked = undefined;
    weekChecked = undefined;
    todayChecked = undefined;
  }
});

// add todo
createTodo.addEventListener("click", (e) => {
  createTask();
});

if (localStorage.getItem("todoList")) {
  let storageTodoList = localStorage.getItem("todoList");
  storageTodoList = JSON.parse(storageTodoList);
  renderTodos(storageTodoList);
}

createTodo.addEventListener("click", (e) => {
  if (currentProject !== undefined) {
    if (newTodoTitle.checkValidity() && newTodoDueDate.checkValidity()) {
      let storageProjectList = localStorage.getItem("projectList");
      storageProjectList = JSON.parse(storageProjectList);
      todoModalBackground.style.display = "none";
      const project = storageProjectList.find((data) => data.title === currentProject);
      renderTodos(project.todos);
      newTodoTitle.value = "";
      newTodoDetails.value = "";
      newTodoDueDate.value = null;
    }
  } else if (newTodoTitle.checkValidity() && newTodoDueDate.checkValidity()) {
    todoModalBackground.style.display = "none";
    let localTodoList = localStorage.getItem("todoList");
    localTodoList = JSON.parse(localTodoList);
    renderTodos(localTodoList);
    newTodoTitle.value = "";
    newTodoDetails.value = "";
    newTodoDueDate.value = null;
  }
});

// show details
document.addEventListener("click", (e) => {
  if (e.target.classList.value === "todo-details") {
    let storageTodoList = localStorage.getItem("todoList");
    storageTodoList = JSON.parse(storageTodoList);
    removeAllChildNodes(todoDetailsModal);
    // find obj in todoList
    const obj = storageTodoList.find((data) => data.title === e.target.parentNode.getAttribute("id"));
    todoDetailsModalBackground.style.display = "block";
    // close btn
    const detailsClose = document.createElement("h1");
    detailsClose.textContent = "x";
    detailsClose.classList.add("details-close");
    todoDetailsModal.appendChild(detailsClose);
    // header
    const detailsHeader = document.createElement("h1");
    detailsHeader.textContent = obj.title;
    todoDetailsModal.appendChild(detailsHeader);
    // priority
    const detailsPriority = document.createElement("p");
    detailsPriority.textContent = `Priority: ${obj.priority}`;
    todoDetailsModal.appendChild(detailsPriority);
    // due date
    const detailsDueDate = document.createElement("p");
    detailsDueDate.textContent = `Due Date: ${format(new Date(obj.dueDate), "MMMM " + "do " + "y")}`;
    todoDetailsModal.appendChild(detailsDueDate);
    // details
    const detailsDetails = document.createElement("p");
    detailsDetails.textContent = `Details: ${obj.details}`;
    todoDetailsModal.appendChild(detailsDetails);
  }
});

// close details
document.addEventListener("click", (e) => {
  if (e.target.classList.value === "details-close") {
    todoDetailsModalBackground.style.display = "none";
  }
});

// home btn
home.addEventListener("click", () => {
  let storageTodoList = localStorage.getItem("todoList");
  storageTodoList = JSON.parse(storageTodoList);
  addTaskBtn.style.display = "block";
  removeAllChildNodes(displayTodoList);
  renderTodos(storageTodoList);
  currentProject = undefined;
  homeChecked = "checked";
  todayChecked = undefined;
  weekChecked = undefined;
});

today.addEventListener("click", () => {
  addTaskBtn.style.display = "none";
  let storageTodoList = localStorage.getItem("todoList");
  storageTodoList = JSON.parse(storageTodoList);
  todayList = storageTodoList.filter((todo) => compareDatesToday(todo.dueDate));
  removeAllChildNodes(displayTodoList);
  renderTodos(todayList);
  todayChecked = "checked";
  homeChecked = undefined;
  currentProject = undefined;
  weekChecked = undefined;
});

week.addEventListener("click", () => {
  let storageTodoList = localStorage.getItem("todoList");
  storageTodoList = JSON.parse(storageTodoList);
  addTaskBtn.style.display = "none";
  weekList = storageTodoList.filter((todo) => compareDatesWeek(todo.dueDate));
  removeAllChildNodes(displayTodoList);
  renderTodos(weekList);
  todayChecked = undefined;
  homeChecked = undefined;
  currentProject = undefined;
  weekChecked = "checked";
});

// edit btn
document.addEventListener("click", (e) => {
  if (e.target.classList.value === "edit-icon") {
    let storageTodoList = localStorage.getItem("todoList");
    storageTodoList = JSON.parse(storageTodoList);
    // display details of todo to edit modal
    editModalBackground.style.display = "block";
    const todo = storageTodoList.find((data) => data.title === e.target.parentNode.getAttribute("id"));
    editTodoTitle.value = todo.title;
    editTodoDetails.value = todo.details;
    editTodoDueDate.value = todo.dueDate;
    if (todo.priority === "low") {
      editTodoLow.checked = true;
    } else if (todo.priority === "medium") {
      editTodoMedium.checked = true;
    } else {
      editTodoHigh.checked = true;
    }
    // set individual id
    confirmEdit.setAttribute("id", editTodoTitle.value);
  }
});

confirmEdit.addEventListener("click", () => {
  let storageProjectList = localStorage.getItem("projectList");
  storageProjectList = JSON.parse(storageProjectList);
  if (storageProjectList.find((data) => data.title === currentProject)) {
    let storageTodoList = localStorage.getItem("todoList");
    storageTodoList = JSON.parse(storageTodoList);
    const project = storageProjectList.find((data) => data.title === currentProject);
    const projectTodo = project.todos.find((data) => data.title === confirmEdit.getAttribute("id"));
    projectTodo.title = editTodoTitle.value;
    projectTodo.details = editTodoDetails.value;
    projectTodo.dueDate = editTodoDueDate.value;
    if (editTodoLow.checked) {
      projectTodo.priority = "low";
    } else if (editTodoMedium.checked) {
      projectTodo.priority = "medium";
    } else {
      projectTodo.priority = "high";
    }
    const homeTodo = storageTodoList.find((data) => data.title === confirmEdit.getAttribute("id"));
    homeTodo.title = editTodoTitle.value;
    homeTodo.details = editTodoDetails.value;
    homeTodo.dueDate = editTodoDueDate.value;
    if (editTodoLow.checked) {
      homeTodo.priority = "low";
    } else if (editTodoMedium.checked) {
      homeTodo.priority = "medium";
    } else {
      homeTodo.priority = "high";
    }
    localStorage.setItem("todoList", JSON.stringify(storageTodoList));
    localStorage.setItem("projectList", JSON.stringify(storageProjectList));
    editModalBackground.style.display = "none";
    removeAllChildNodes(displayTodoList);
    renderTodos(project.todos);
  } else {
    let storageTodoList = localStorage.getItem("todoList");
    storageTodoList = JSON.parse(storageTodoList);
    const homeTodo = storageTodoList.find((data) => data.title === confirmEdit.getAttribute("id"));
    homeTodo.title = editTodoTitle.value;
    homeTodo.details = editTodoDetails.value;
    homeTodo.dueDate = editTodoDueDate.value;
    if (editTodoLow.checked) {
      homeTodo.priority = "low";
    } else if (editTodoMedium.checked) {
      homeTodo.priority = "medium";
    } else {
      homeTodo.priority = "high";
    }
    localStorage.setItem("todoList", JSON.stringify(storageTodoList));
    editModalBackground.style.display = "none";
    removeAllChildNodes(displayTodoList);
    renderTodos(storageTodoList);
  }
});

closeTodoEdit.addEventListener("click", () => {
  editModalBackground.style.display = "none";
});

// delete btn functional
document.addEventListener("click", (e) => {
  if (e.target.classList.value === "delete-todo-icon") {
    if (currentProject !== undefined && currentProject !== "") {
      deleteTodo(e.target);
      let storageProjectList = localStorage.getItem("projectList");
      storageProjectList = JSON.parse(storageProjectList);
      const project = storageProjectList.find((data) => data.title === currentProject);
      removeAllChildNodes(displayTodoList);
      renderTodos(project.todos);
    } else if (homeChecked !== undefined && homeChecked !== "") {
      deleteTodo(e.target);
      let storageTodoList = localStorage.getItem("todoList");
      storageTodoList = JSON.parse(storageTodoList);
      removeAllChildNodes(displayTodoList);
      renderTodos(storageTodoList);
    } else if (todayChecked !== undefined && todayChecked !== "") {
      deleteTodo(e.target);
      removeAllChildNodes(displayTodoList);
      renderTodos(todayList);
    } else if (weekChecked !== undefined) {
      deleteTodo(e.target);
      removeAllChildNodes(displayTodoList);
      renderTodos(weekList);
    }
  }
});

export {
  newTodoTitle, newTodoDetails, newTodoDueDate, newTodoLow, newTodoMedium, newProjectTitle,
  currentProject, weekList, todayList,
};
