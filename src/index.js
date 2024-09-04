import "./styles.css";
// import {storageAvailable} from "./storage.js";

// sidebar
const projectTitles = document.getElementById('projectTitles')
const projectTemplate = document.createElement('button')
const addProjectBtn = document.getElementById('addProject')
const dialogTitle = document.querySelector('#dialogTitle')
const projectTitleForm = document.getElementById('projectTitleForm')
const currentProject = document.getElementById('currentProject')

// currentProject child element count issues?

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

            currentProject.children[0].querySelector('b').textContent = projTitle
            // remove all tasks except first hidden empty taskCard
            if (currentProject.children[1].children[1]) {
                for (let i = currentProject.children[1].children.length-1; i > 0; i--) {
                    currentProject.children[1].children[i].remove()
                }
            }
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
const taskSection = currentProject.children[1]
const taskCardTemplate = document.querySelector('.taskCard')
const addTaskBtn = document.getElementById('addTask')

function addTask(event) {
        const editBtn = document.getElementById('editBtn')
        editBtn.style.display = 'none'

        const saveBtn = document.getElementById('saveBtn')
        saveBtn.style.display = 'block'
        saveBtn.addEventListener('click', saveTask)

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


function editTask(target) {
    const taskCard = target.closest('.taskCard');
}

function saveTask(target) {
    const taskTitle = document.getElementById('newTaskTitle').value.trim()
    const taskDescription = document.getElementById('newTaskDescription').value.trim()
    const taskDate = document.getElementById('newTaskDate').value
    const taskPriority = document.getElementById('newTaskPriority').value
}

function deleteTask(target) {
    const taskCard = target.closest('.taskCard');
    taskCard.remove();
}

// global scope due to webpack (could try making new module and importing)
window.editTask = editTask;
window.saveTask = saveTask;
window.deleteTask = deleteTask; 
