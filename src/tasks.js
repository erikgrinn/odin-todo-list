import {storeTask, saveTask, deleteTask } from './storage.js';

const taskSection = currentProject.children[1]
const taskCardTemplate = document.querySelector('.taskCard')
const addTaskBtn = document.getElementById('addTask')

function projectKeys(currentProject) {
    let keys = []

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Check if the key starts with the specified letter or string
        if (key.startsWith(`task-${currentProject.getAttribute('data-storage-letter')}`)) {
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
        const storedTaskData = localStorage.getItem(`${taskIds[i]}`);
        if (storedTaskData) {
            addTask(storedTaskData)
        } 
    }
}

function addTask(storedTaskData) {
        let newTask = taskCardTemplate.cloneNode(true) // clone node with children
        newTask.style.display = 'block'
        setTaskNumProperties(newTask)
        taskSection.appendChild(newTask)
        
        // if taskData passed from loadTasks()
        if (storedTaskData) {
            const taskData = JSON.parse(storedTaskData);
        
            // Find the form elements
            const taskTitle = newTask.querySelector('#taskTitle');
            const taskDescription = newTask.querySelector('#taskDescription');
            const taskDate = newTask.querySelector('#taskDate');
            const taskPriority = newTask.querySelector('#taskPriority');

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

function setTaskNumProperties(newTask) {
    newTask.setAttribute('data-task-num', taskSection.children.length) // taskCard
    newTask.children[0].setAttribute('id', `${currentProject.getAttribute('data-storage-letter')}${taskSection.children.length}`) // form id
    // newTask.querySelector('button[type="submit"]').setAttribute('form', `A${taskSection.children.length}`) // submit button tied to form id
}

addTaskBtn.addEventListener('click', () => addTask())

export {loadTasks, addTask}