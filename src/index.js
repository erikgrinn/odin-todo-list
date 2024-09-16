import "./styles.css";
import {handleProjectTitleSubmit, loadProjects} from './project.js';
import { loadTasks } from './tasks.js'
import { deleteTask } from "./storage.js";


const currentProject = document.getElementById('currentProject')
currentProject.setAttribute('data-storage-letter', 'A')

const currentProjectTitle = document.querySelector('#currentProjectTitle > b').textContent

window.deleteTask = deleteTask; // using onclick in html

loadTasks(currentProjectTitle)




