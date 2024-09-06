import "./styles.css";
// import "./retrieve.js";

// global constants


// sidebar
const projectTitles = document.getElementById('projectTitles')
const projectTemplate = document.createElement('button')
const addProjectBtn = document.getElementById('addProject')
const dialogTitle = document.querySelector('#dialogTitle')
const projectTitleForm = document.getElementById('projectTitleForm')
const currentProject = document.getElementById('currentProject')
currentProject.setAttribute('data-storage-letter', 'A')

// main/tasks
const taskSection = currentProject.children[1]
const taskCardTemplate = document.querySelector('.taskCard')
const addTaskBtn = document.getElementById('addTask')

function projectKeys(currentProject) {
    let keys = []

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Check if the key starts with the specified letter or string
        if (key.startsWith(`${currentProject.getAttribute('data-storage-letter')}`)) {
            keys.push(key)
        }
    }
    return {keys};
}

function loadTasks(currentProject) {

    const taskIds = projectKeys(currentProject).keys // double check currentProject here is correctly referenced?
        taskIds.sort((a, b) => {
            // Extract the numeric part of both strings
            const numA = parseInt(a.match(/\d+/)[0], 10); 
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
            newProj.setAttribute('data-storage-letter', String.fromCharCode(65 + (projectTitles.childElementCount-1))) // ASCII char for uppercase, starting at B
            projectTitles.appendChild(newProj)

            currentProject.children[0].querySelector('b').textContent = projTitle
            currentProject.setAttribute('data-storage-letter', newProj.getAttribute('data-storage-letter'))

            // remove all tasks except first hidden empty taskCard
            if (currentProject.children[1].children[1]) {
                for (let i = currentProject.children[1].children.length-1; i > 0; i--) {
                    currentProject.children[1].children[i].remove()
                }
            }

            //need to reload saved tasks, but probably not here
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

function addTask(storedTaskData) {
        let newTask = taskCardTemplate.cloneNode(true) // clone node with children
        newTask.style.display = 'block'

        setTaskNumProperties(newTask)
        taskSection.appendChild(newTask)
        
        // if taskData passed from loadTasks()
        if (storedTaskData) {
            const taskData = JSON.parse(storedTaskData);
        
            // Find the form elements
            const taskTitle = newTask.querySelector('#newTaskTitle');
            const taskDescription = newTask.querySelector('#newTaskDescription');
            const taskDate = newTask.querySelector('#newTaskDate');
            const taskPriority = newTask.querySelector('.priority');

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
    const taskCardForm = document.querySelector(`form#${currentProject.getAttribute('data-storage-letter')}${newTaskNum}`);

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
    newTask.children[0].setAttribute('id', `${currentProject.getAttribute('data-storage-letter')}${taskSection.children.length}`) // form id
    // newTask.querySelector('button[type="submit"]').setAttribute('form', `A${taskSection.children.length}`) // submit button tied to form id
}

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
    const lastTaskId = `${letterPart}${numberPart}`; 

    localStorage.removeItem(`${lastTaskId}`)

    // reassign task-nums
    for (let i=1; i<taskSection.children.length; i++) {
        taskSection.children[i].setAttribute('data-task-num', i)
        taskSection.children[i].children[0].setAttribute('id', `A${i}`) // form id
        // taskSection.children[i].querySelector('button[type="submit"]').setAttribute('form', `A${i}`) // submit button tied to form id
        saveTask(taskSection.children[i])
    }
}

// localStorage.clear()
loadTasks(currentProject)
window.deleteTask = deleteTask; // using onclick in html

