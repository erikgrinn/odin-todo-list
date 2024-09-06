import "./styles.css";
// import "./retrieve.js";

// sidebar
const projectTitles = document.getElementById('projectTitles')
const projectTemplate = document.createElement('button')
const addProjectBtn = document.getElementById('addProject')
const dialogTitle = document.querySelector('#dialogTitle')
const projectTitleForm = document.getElementById('projectTitleForm')
const currentProject = document.getElementById('currentProject')

function projectKeys(letter) {
    let keys = []


    // Iterate over all keys in localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Check if the key starts with the specified letter or string
        if (key.startsWith(letter)) {
            keys.push(key)
        }
    }

    return {keys};
}

function loadTasks(currentProject) {

    const taskIds = projectKeys('A').keys
        taskIds.sort((a, b) => {
            // Extract the numeric part of both strings
            const numA = parseInt(a.match(/\d+/)[0], 10);  // Extract the number from 'A1', 'A3', etc.
            const numB = parseInt(b.match(/\d+/)[0], 10);
        
            // Compare the numeric parts
            return numA - numB;
        });
    
    

    for (let i=0; i<taskIds.length; i++) {
        
        // Retrieve the task data from localStorage
        const storedTaskData = localStorage.getItem(taskIds[i]);
    
        // Check if there is any data in localStorage for this task
        if (storedTaskData) {

            addTask(storedTaskData)
           
        } else {
            console.log("No task found in localStorage for this ID");
        }
    }
}


function addProjectTitle(event) {
    dialogTitle.showModal()

    projectTitleForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const projTitle = document.getElementById('newTitle').value.trim();

        if (projTitle) { // needed to prevent empty buttons being added
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

function addTask(storedTaskData) {
        let newTask = taskCardTemplate.cloneNode(true) // clone node with children
        newTask.style.display = 'block'

        setTaskNumProperties(newTask)
        taskSection.appendChild(newTask)

        if (storedTaskData) {
            const taskData = JSON.parse(storedTaskData);
        
            // Find the form elements
            const taskTitle = taskCardForm.querySelector('#newTaskTitle');
            const taskDescription = taskCardForm.querySelector('#newTaskDescription');
            const taskDate = taskCardForm.querySelector('#newTaskDate');
            const taskPriority = taskCardForm.querySelector('.priority');

            // Populate the form fields with the retrieved data
            taskTitle.value = taskData.taskTitle;
            taskDescription.value = taskData.taskDescription;
            taskDate.value = taskData.taskDate;
            taskPriority.value = taskData.taskPriority;
            storeTask(newTask)
        } else {
            storeTask(newTask)
        }


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
            localStorage.setItem(`${taskCardForm.id}`, JSON.stringify(taskData));
    });

    taskDescription.addEventListener("change", () => {
        taskData.taskDescription = taskDescription.value.trim()
        localStorage.setItem(`${taskCardForm.id}`, JSON.stringify(taskData));
    });

    taskDate.addEventListener("change", () => {
            taskData.taskDate = taskDate.value.trim()
            localStorage.setItem(`${taskCardForm.id}`, JSON.stringify(taskData));   
        });

    taskPriority.addEventListener("change", () => {
            taskData.taskPriority = taskPriority.value.trim()
            localStorage.setItem(`${taskCardForm.id}`, JSON.stringify(taskData));    
        });

    localStorage.setItem(`${taskCardForm.id}`, JSON.stringify(taskData));
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

    localStorage.setItem(`${taskCardForm.id}`, JSON.stringify(taskData));
}

function deleteTask(target) {
    // remove target task card
    const taskCard = target.closest('.taskCard')
    const taskCardForm = target.closest('form');

    const taskId = taskCardForm.id; 
    localStorage.removeItem(`${taskId}`);
    taskCard.remove();

    // remove what was the last task card from localStorage
    const letterPart = taskId.match(/[a-zA-Z]+/)[0]; // Extract the letter(s)
    const numberPart = taskSection.childElementCount
    const lastTaskId = `${letterPart}${numberPart}`; // Combine letter and incremented number

    localStorage.removeItem(`${lastTaskId}`)


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

// clearStorage()
loadTasks(currentProject)
// global scope due to webpack (could try making new module and importing)
// window.editTask = editTask;
window.saveTask = saveTask;
window.deleteTask = deleteTask; 
