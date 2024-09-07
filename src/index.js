import "./styles.css";
import {addProjectTitle} from './project.js';
import { addTask, loadTasks } from './tasks.js'
import { deleteTask } from "./storage.js";


const currentProject = document.getElementById('currentProject')
currentProject.setAttribute('data-storage-letter', 'A')

window.deleteTask = deleteTask; // using onclick in html

// localStorage.clear()
loadTasks(currentProject)


