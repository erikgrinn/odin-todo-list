import "./styles.css";
import {handleProjectTitleSubmit, loadProjects} from './project.js';
import { loadTasks, addTask } from './tasks.js'
import { deleteTask, saveTask } from "./storage.js";


const currentProjectTitle = document.getElementById('currentProject')
currentProject.setAttribute('data-storage-letter', 'A')

window.deleteTask = deleteTask; // using onclick in html

// localStorage.clear()
loadTasks(currentProject)


