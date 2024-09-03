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

addProjectBtn.addEventListener('click', () => addProjectTitle())

// main/tasks
const currentProject = document.getElementById('currentProject')
const taskSection = currentProject.children[1]
const taskCardTemplate = document.querySelector('.taskCard')
const addTaskBtn = document.getElementById('addTask')

function addTask(event) {
    
        const taskTitle = document.getElementById('newTaskTitle').value.trim()
        const taskDescription = document.getElementById('newTaskDescription').value.trim()
        const taskDate = document.getElementById('newTaskDate').value
        const taskPriority = document.getElementById('newTaskPriority').value

        let newTask = taskCardTemplate.cloneNode(true) // clone node with children
        newTask.style.display = 'block'
        // newTask.querySelector('.taskTitle').textContent = taskTitle
        // newTask.querySelector('.taskDescription').textContent = taskDescription
        // newTask.querySelector('.taskDate').textContent = taskDate
        // newTask.querySelector('.taskPriority').textContent = taskPriority

        // newTask.setAttribute('data-task-title', taskTitle.replace(/\s+/g, '-')) // class names can't have spaces
        taskSection.appendChild(newTask)
        }

addTaskBtn.addEventListener('click', () => addTask())


// function editTask(target) {
//     const taskCard = target.closest('.taskCard');
// }

function deleteTask(target) {
    const taskCard = target.closest('.taskCard');
    taskCard.remove();
}

// global scope due to webpack (could try making new module and importing)
// window.editTask = editTask;
window.deleteTask = deleteTask; 
