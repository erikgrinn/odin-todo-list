import "./styles.css";
// import {storageAvailable} from "./storage.js";

// sidebar
const projectTitles = document.getElementById('projectTitles')
const projectTemplate = document.createElement('button')
const addProjectBtn = document.getElementById('addProject')
const dialogTitle = document.querySelector('#dialogTitle')
const projectTitleForm = document.getElementById('projectTitleForm')
const currentProject = document.getElementById('currentProject')


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


// taskCardForm cloneNode / im manipulating the empty one
function addTask(event) {
        const editBtn = document.getElementById('editBtn')
        editBtn.style.display = 'none'

        const saveBtn = document.getElementById('saveBtn')
        saveBtn.style.display = 'block'

        let newTask = taskCardTemplate.cloneNode(true) // clone node with children
        newTask.style.display = 'block'

        setTaskNumProperties(newTask)
        taskSection.appendChild(newTask)

        // taskCardForm = document.querySelector(`[data-task-num]`) // this is the empty template form, but at least event handler is working
        let newTaskNum = newTask.getAttribute(`data-task-num`)
        const taskCardForm = document.querySelector(`form#A${newTaskNum}`);
        taskCardForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log(e.target)
            saveTask(e.target)
        })



        // newTask.setAttribute('data-task-title', taskTitle.replace(/\s+/g, '-')) // class names can't have spaces

        // saveBtn.addEventListener('click', saveTask)


            // const taskTitle = taskCardForm.querySelector('#newTaskTitle').value.trim()
        //     // const taskDescription = document.getElementById('newTaskDescription').value.trim()
        //     // const taskDate = document.getElementById('newTaskDate').value
        //     // const taskPriority = document.getElementById('newTaskPriority').value

    }

addTaskBtn.addEventListener('click', () => addTask())

function setTaskNumProperties(newTask) {
    newTask.setAttribute('data-task-num', taskSection.children.length) // taskCard
    newTask.children[0].setAttribute('id', `A${taskSection.children.length}`) // form id
    newTask.querySelector('button[type="submit"]').setAttribute('form', `A${taskSection.children.length}`) // submit button tied to form id
}

function editTask(target) {
    const taskCard = target.closest('.taskCard');
}

function saveTask(target) {
    console.log('empty function')
}

function deleteTask(target) {
    // remove target task card
    const taskCard = target.closest('.taskCard');
    taskCard.remove();

    // reassign task-nums
    for (let i=0; i<taskSection.children.length; i++) {
        taskSection.children[i].setAttribute('data-task-num', i)
        taskSection.children[i].children[0].setAttribute('id', `A${i}`) // form id
        taskSection.children[i].querySelector('button[type="submit"]').setAttribute('form', `A${i}`) // submit button tied to form id

    }
}

// global scope due to webpack (could try making new module and importing)
window.editTask = editTask;
window.saveTask = saveTask;
window.deleteTask = deleteTask; 
