import {storeTask, saveTask, deleteTask } from './storage.js';

const currentProjectTitle = document.querySelector('#currentProjectTitle > b').textContent
const taskSection = currentProject.children[1]
const taskCardTemplate = document.querySelector('.taskCard')
const addTaskBtn = document.getElementById('addTask')

function projectKeys(currentProjectTitle) {
    
    let keys = []

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Check if the key starts with the specified letter or string
        if (key.startsWith(`${currentProjectTitle}-`)) {
            keys.push(key)
        }
    }
    return keys;
}

function loadTasks(currentProjectTitle) {
    const taskIds = projectKeys(currentProjectTitle); // Ensure currentProject is correctly referenced.
    if (!taskIds) {
        return
    }

    taskIds.sort((a, b) => {
        // Extract the last 2 characters of both strings and convert them to numbers
        const numA = parseInt(a.slice(-2), 10); 
        const numB = parseInt(b.slice(-2), 10);
    
        // Compare the numeric parts
        return numB - numA;
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
        setTaskProperties(newTask)
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
            console.log(newTask)
            storeTask(newTask)
        }
    }

function setTaskProperties(newTask) {
    const currentProjectTitle = document.querySelector('#currentProjectTitle > b').textContent
    newTask.setAttribute('data-task-num', taskSection.children.length) // taskCard
    newTask.children[0].setAttribute('id', `${currentProjectTitle}-${taskSection.children.length}`) // form id
    // newTask.querySelector('button[type="submit"]').setAttribute('form', `A${taskSection.children.length}`) // submit button tied to form id
}

addTaskBtn.addEventListener('click', () => addTask())

export {loadTasks, addTask}