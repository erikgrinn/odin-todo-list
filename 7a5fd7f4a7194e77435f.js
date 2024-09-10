import "./styles.css";
import {handleProjectTitleSubmit, loadProjects} from './project.js';
import { loadTasks, addTask } from './tasks.js'
import { deleteTask, saveTask } from "./storage.js";


const currentProject = document.getElementById('currentProject')
currentProject.setAttribute('data-storage-letter', 'A')

const currentProjectTitle = document.querySelector('#currentProjectTitle > b').textContent

window.deleteTask = deleteTask; // using onclick in html

loadTasks(currentProjectTitle)


// need to preventdefault on enter key


