import {loadTasks} from './tasks.js';

const projectTitles = document.getElementById('projectTitles')
const projectTemplate = document.createElement('button')
const addProjectBtn = document.getElementById('addProject')
const dialogTitle = document.querySelector('#dialogTitle')
const projectTitleForm = document.getElementById('projectTitleForm')
const currentProject = document.getElementById('currentProject')

// initialize home local storage
const currentProjectTitle = currentProject.children[0].querySelector('b').textContent
localStorage.setItem(`project-${currentProjectTitle}`, currentProject.getAttribute('data-storage-letter'))


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

            // can't start project title with "task-"
            localStorage.setItem(`project-${projTitle}`, newProj.getAttribute('data-storage-letter'))
            loadTasks(currentProject)
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


function getProjects() {
    // Step 1: Get all keys from localStorage
    const keys = Object.keys(localStorage);

    // Step 2: Map the keys to an array of objects with both keys and values
    const keyValuePairs = keys.map(key => ({
        key: key,
        value: localStorage.getItem(key) // Get the corresponding value for each key
    }));

    // Step 3: Sort the array based on the 'value' property
    keyValuePairs.sort((a, b) => a.value.localeCompare(b.value));

    // Step 4: Extract the sorted keys
    const sortedKeys = keyValuePairs.map(pair => pair.key);
    return sortedKeys

}

function loadProjects() {
    const projectList = getProjects(); 
    console.log(projectList)

    
}

loadProjects()

export {addProjectTitle, loadProjects}