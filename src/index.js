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

function addTask(event) {
        let newTask = taskCardTemplate.cloneNode(true) // clone node with children
        newTask.style.display = 'block'

        setTaskNumProperties(newTask)
        taskSection.appendChild(newTask)

        storeTask(newTask)

        // taskCardForm.addEventListener('submit', function(e) {
        //     e.preventDefault();
        //     // console.log(e.target)
        //     // saveTask(e.target)
        // })

        // saveBtn.addEventListener('click', saveTask)

    }

addTaskBtn.addEventListener('click', () => addTask())

function storeTask(task) {
    let newTaskNum = task.getAttribute(`data-task-num`)
    const taskCardForm = document.querySelector(`form#A${newTaskNum}`);

    const taskTitle = taskCardForm.querySelector('#newTaskTitle');
    const taskDescription = taskCardForm.querySelector('#newTaskDescription');
    const taskDate = taskCardForm.querySelector('#newTaskDate');
    const taskPriority = taskCardForm.querySelector('.priority');

    let taskData = {
        taskTitle: taskTitle.value.trim(),
        taskDescription: taskDescription.value.trim(),
        taskDate: taskDate.value.trim(),
        taskPriority: taskPriority.value.trim()
    };

    // change event listeners
    taskTitle.addEventListener("change", () => {
            taskData.taskTitle = taskTitle.value.trim()
            localStorage.setItem(`task-${taskCardForm.id}`, JSON.stringify(taskData));
    });

    taskDescription.addEventListener("change", () => {
        taskData.taskDescription = taskDescription.value.trim()
        localStorage.setItem(`task-${taskCardForm.id}`, JSON.stringify(taskData));
    });

    taskDate.addEventListener("change", () => {
            taskData.taskDate = taskDate.value.trim()
            localStorage.setItem(`task-${taskCardForm.id}`, JSON.stringify(taskData));   
        });

    taskPriority.addEventListener("change", () => {
            taskData.taskPriority = taskPriority.value.trim()
            localStorage.setItem(`task-${taskCardForm.id}`, JSON.stringify(taskData));    
        });

    localStorage.setItem(`task-${taskCardForm.id}`, JSON.stringify(taskData));
}

function retrieveTask() {
    document.addEventListener('DOMContentLoaded', () => {
        const taskFormId = taskCardForm.id;  // Get the form's unique ID
        
        // Retrieve and set the task title from localStorage using the form ID
        if (localStorage.getItem(`${taskFormId}-taskTitle`)) {
            taskTitle.value = localStorage.getItem(`${taskFormId}-taskTitle`);
        }
    
        // Retrieve and set the task description from localStorage using the form ID
        if (localStorage.getItem(`${taskFormId}-taskDescription`)) {
            taskDescription.value = localStorage.getItem(`${taskFormId}-taskDescription`);
        }
    
        // Retrieve and set the task date from localStorage using the form ID
        if (localStorage.getItem(`${taskFormId}-taskDate`)) {
            taskDate.value = localStorage.getItem(`${taskFormId}-taskDate`);
        }
    
        // Retrieve and set the task priority from localStorage using the form ID
        if (localStorage.getItem(`${taskFormId}-taskPriority`)) {
            taskPriority.value = localStorage.getItem(`${taskFormId}-taskPriority`);
        }
    });
}

function setTaskNumProperties(newTask) {
    newTask.setAttribute('data-task-num', taskSection.children.length) // taskCard
    newTask.children[0].setAttribute('id', `A${taskSection.children.length}`) // form id
    // newTask.querySelector('button[type="submit"]').setAttribute('form', `A${taskSection.children.length}`) // submit button tied to form id
}

// function editTask(target) {
//     const taskCard = target.closest('.taskCard');
// }

function saveTask(target) {
    let newTaskNum = target.getAttribute(`data-task-num`)
    const taskCardForm = document.querySelector(`form#A${newTaskNum}`);

    const taskTitle = taskCardForm.querySelector('#newTaskTitle');
    const taskDescription = taskCardForm.querySelector('#newTaskDescription');
    const taskDate = taskCardForm.querySelector('#newTaskDate');
    const taskPriority = taskCardForm.querySelector('.priority');

    let taskData = {
        taskTitle: taskTitle.value.trim(),
        taskDescription: taskDescription.value.trim(),
        taskDate: taskDate.value.trim(),
        taskPriority: taskPriority.value.trim()
    };

    localStorage.setItem(`task-${taskCardForm.id}`, JSON.stringify(taskData));
}

function deleteTask(target) {
    // remove target task card
    const taskCard = target.closest('.taskCard')
    const taskCardForm = target.closest('form');

    const taskId = taskCardForm.id; 
    localStorage.removeItem(`task-${taskId}`);
    taskCard.remove();

    // remove what was the last task card from localStorage
    const letterPart = taskId.match(/[a-zA-Z]+/)[0]; // Extract the letter(s)
    const numberPart = taskSection.childElementCount
    const lastTaskId = `${letterPart}${numberPart}`; // Combine letter and incremented number

    localStorage.removeItem(`task-${lastTaskId}`)


    // reassign task-nums
    for (let i=1; i<taskSection.children.length; i++) {
        // setTaskNumProperties(taskSection.children[i])
        taskSection.children[i].setAttribute('data-task-num', i)
        taskSection.children[i].children[0].setAttribute('id', `A${i}`) // form id
        // taskSection.children[i].querySelector('button[type="submit"]').setAttribute('form', `A${i}`) // submit button tied to form id
        saveTask(taskSection.children[i])

    }
}

function clearStorage() {
    localStorage.clear()
}

clearStorage()

// global scope due to webpack (could try making new module and importing)
// window.editTask = editTask;
window.saveTask = saveTask;
window.deleteTask = deleteTask; 
