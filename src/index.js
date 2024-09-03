import "./styles.css";
// import {storageAvailable} from "./storage.js";

// sidebar
const projectTitles = document.getElementById('projectTitles')
const projectTemplate = document.createElement('button')
const addProjectBtn = document.getElementById('addProject')
const dialogTitle = document.querySelector('#dialogTitle')
const projectTitleForm = document.getElementById('projectTitleForm')


function addProjectTitle(event) {
    dialogTitle.showModal()

    projectTitleForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const projTitle = document.getElementById('newTitle').value.trim();

        if (projTitle) { //needed to prevent empty buttons being added
            let newProj = projectTemplate.cloneNode()
            newProj.textContent = projTitle
            newProj.setAttribute('class', projTitle.replace(/\s+/g, '-')) // class names can't have spaces
            projectTitles.appendChild(newProj)
        }

        projectTitleForm.reset()
        dialogTitle.close();
    })
    
    const cancelBtn = document.getElementById('cancelTitle')
    cancelBtn.addEventListener('click', () => {
      projectTitleForm.reset()
      dialogTitle.close()
    })
}

addProjectBtn.addEventListener('click', addProjectTitle)

// main/tasks
const currentProject = document.getElementById('currentProject')
const taskCardTemplate = document.querySelector('.taskCard')
const dialogContent = document.getElementById('dialogContent')
const taskContentForm = document.getElementById('taskContentForm')
const addTaskBtn = document.getElementById('addTask')

function addTask(event) {
    dialogContent.showModal()

    taskContentForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const taskTitle = document.getElementById('newTaskTitle').value.trim()
        const taskDescription = document.getElementById('newTaskDescription').value.trim()

        if (taskTitle) { //needed to prevent empty buttons being added
            let newTask = taskCardTemplate.cloneNode(true) // clone node with children
            console.log(newTask)
            newTask.querySelector('.taskTitle').textContent = taskTitle
            newTask.querySelector('.taskDescription').textContent = taskDescription
            newTask.setAttribute('class', taskTitle.replace(/\s+/g, '-')) // class names can't have spaces
            currentProject.appendChild(newTask)
        }

        taskContentForm.reset()
        dialogContent.close();
    })
    
    const cancelBtn = document.getElementById('cancelTask')
    cancelBtn.addEventListener('click', () => {
      taskContentForm.reset()
      dialogContent.close()
    })
}

addTaskBtn.addEventListener('click', addTask)


//