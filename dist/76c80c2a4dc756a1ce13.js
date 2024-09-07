import "./styles.css";
// import "./retrieve.js";

// global constants


// sidebar
const projectTitles = document.getElementById('projectTitles')
const projectTemplate = document.createElement('button')
const addProjectBtn = document.getElementById('addProject')
const dialogTitle = document.querySelector('#dialogTitle')
const projectTitleForm = document.getElementById('projectTitleForm')
const currentProject = document.getElementById('currentProject')
currentProject.setAttribute('data-storage-letter', 'A')

// main/tasks
const taskSection = currentProject.children[1]
const taskCardTemplate = document.querySelector('.taskCard')
const addTaskBtn = document.getElementById('addTask')



// localStorage.clear()
loadTasks(currentProject)
window.deleteTask = deleteTask; // using onclick in html

