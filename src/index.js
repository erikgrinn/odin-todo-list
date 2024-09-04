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

        // should call separate function here to check if number already used, prevent duplicates
        setTaskNum(newTask)
        taskSection.appendChild(newTask)

        const taskCardForm = document.getElementById('taskCardForm') // this is the empty template form, but at least event handler is working
        console.log(taskCardForm)
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

function setTaskNum(newTask) {
    newTask.setAttribute('data-task-num', taskSection.children.length)
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
    }
}

// global scope due to webpack (could try making new module and importing)
window.editTask = editTask;
// window.saveTask = saveTask;
window.deleteTask = deleteTask; 
