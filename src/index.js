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
        // const editBtn = document.getElementById('editBtn')
        // editBtn.style.display = 'none'

        // const saveBtn = document.getElementById('saveBtn')
        // saveBtn.style.display = 'block'

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

        // newTask.setAttribute('data-task-title', taskTitle.replace(/\s+/g, '-')) // class names can't have spaces

        // saveBtn.addEventListener('click', saveTask)

    }

addTaskBtn.addEventListener('click', () => addTask())

function storeTask(newTask) {
    let newTaskNum = newTask.getAttribute(`data-task-num`)
    const taskCardForm = document.querySelector(`form#A${newTaskNum}`);

    // initial storage
    const taskTitle = taskCardForm.querySelector('#newTaskTitle');
    const taskDescription = taskCardForm.querySelector('#newTaskDescription');
    const taskDate = taskCardForm.querySelector('#newTaskDate');
    const taskPriority = taskCardForm.querySelector('.priority');

    // change event listeners
    taskTitle.addEventListener("change", () => {
        let taskTitleContent = taskTitle.value.trim();
        localStorage.setItem(`${taskCardForm.id}-taskTitle`, taskTitleContent);  // Store task title with form ID
        console.log(taskTitleContent, taskCardForm.id);
    });

    taskDescription.addEventListener("change", () => {
        let taskDescriptionContent = taskDescription.value.trim();
        localStorage.setItem(`${taskCardForm.id}-taskDescription`, taskDescriptionContent);  // Store task description with form ID
        console.log(taskDescriptionContent);
    });

    taskDate.addEventListener("change", () => {
        let taskDateContent = taskDate.value.trim();
        localStorage.setItem(`${taskCardForm.id}-taskDate`, taskDateContent);  // Store task date with form ID
        console.log(taskDateContent);
    });

    taskPriority.addEventListener("change", () => {
        let taskPriorityContent = taskPriority.value.trim();
        localStorage.setItem(`${taskCardForm.id}-taskPriority`, taskPriorityContent);  // Store task priority with form ID
        console.log(taskPriorityContent);
    });
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
    // const taskTitle = target.querySelector('#newTaskTitle')
    // taskTitle.addEventListener("change", () => {
    //     let taskTitleContent = taskTitle.value.trim()
    //     console.log(taskTitleContent)
    // });
    // const taskDescription = target.querySelector('#newTaskDescription').value.trim()
    // const taskDate = target.querySelector('#newTaskDate').value.trim()
    // const taskPriority = target.querySelector('#newTaskPriority').value.trim()
    // console.log(taskTitle,taskDescription,taskDate,taskPriority)

    let newTaskNum = target.getAttribute(`data-task-num`)
    const taskCardForm = document.querySelector(`form#A${newTaskNum}`);

    const taskTitle = taskCardForm.querySelector('#newTaskTitle');
    let taskTitleContent = taskTitle.value.trim();
    localStorage.setItem(`${taskCardForm.id}-taskTitle`, taskTitleContent);  // Store task title with form ID

    const taskDescription = taskCardForm.querySelector('#newTaskDescription');
    let taskDescriptionContent = taskDescription.value.trim();
    localStorage.setItem(`${taskCardForm.id}-taskDescription`, taskDescriptionContent);  // Store task description with form ID
    
    const taskDate = taskCardForm.querySelector('#newTaskDate');
    let taskDateContent = taskDate.value.trim();
    localStorage.setItem(`${taskCardForm.id}-taskDate`, taskDateContent);  // Store task date with form ID

    const taskPriority = taskCardForm.querySelector('.priority');
    let taskPriorityContent = taskPriority.value.trim();
    localStorage.setItem(`${taskCardForm.id}-taskPriority`, taskPriorityContent);  // Store task priority with form ID

}

function deleteTask(target) {
    // remove target task card
    const taskCard = target.closest('.taskCard');
    taskCard.remove();
    localStorage.removeItem()

    // reassign task-nums
    for (let i=0; i<taskSection.children.length; i++) {
        // setTaskNumProperties(taskSection.children[i])
        taskSection.children[i].setAttribute('data-task-num', i)
        taskSection.children[i].children[0].setAttribute('id', `A${i}`) // form id
        // taskSection.children[i].querySelector('button[type="submit"]').setAttribute('form', `A${i}`) // submit button tied to form id
        saveTask(taskSection.children[i])

    }
}

// global scope due to webpack (could try making new module and importing)
// window.editTask = editTask;
window.saveTask = saveTask;
window.deleteTask = deleteTask; 
