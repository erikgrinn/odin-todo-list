import "./styles.css";
import {addProjectTitle} from './project.js';
import { addTask, loadTasks } from './tasks.js'
import { deleteTask } from "./storage.js";

// global constants


// sidebar
// const projectTitles = document.getElementById('projectTitles')
// const projectTemplate = document.createElement('button')
// const addProjectBtn = document.getElementById('addProject')
// const dialogTitle = document.querySelector('#dialogTitle')
// const projectTitleForm = document.getElementById('projectTitleForm')
const currentProject = document.getElementById('currentProject')
currentProject.setAttribute('data-storage-letter', 'A')

// // main/tasks
// const taskSection = currentProject.children[1]
// const taskCardTemplate = document.querySelector('.taskCard')
// const addTaskBtn = document.getElementById('addTask')


window.deleteTask = deleteTask; // using onclick in html

localStorage.clear()
loadTasks(currentProject)


