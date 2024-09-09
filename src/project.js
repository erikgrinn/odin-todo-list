import {loadTasks} from './tasks.js';

const projectTitles = document.getElementById('projectTitles')
const projectTemplate = document.createElement('button')
const addProjectBtn = document.getElementById('addProject')
const dialogTitle = document.querySelector('#dialogTitle')
const projectTitleForm = document.getElementById('projectTitleForm')
const currentProject = document.getElementById('currentProject')

function initProjectStorage() {
    const currentProjectTitle = document.querySelector('#currentProjectTitle > b').textContent;
    localStorage.setItem(`project-${currentProjectTitle}`, currentProject.getAttribute('data-storage-letter'))
}

function getCurrentProjectTitle() {
    return currentProject.children[0].querySelector('b').textContent
}

function storeProject(newProject) {
        const sortedProjects = getProjects()
        const lastStoredValue = sortedProjects[sortedProjects.length-1].value
        const lastLetter = lastStoredValue.charAt(0)
        const nextLetter = String.fromCharCode(lastLetter.charCodeAt(0) + 1)
        newProject.setAttribute('data-storage-letter', nextLetter)
        localStorage.setItem(`project-${newProject.textContent}`, newProject.getAttribute('data-storage-letter'))
}

function handleProjectTitleSubmit(event) {
    event.preventDefault();
    const projTitle = document.getElementById('newTitle').value.trim();

    if (projTitle) { // needed to prevent empty buttons being added
        let newProj = projectTemplate.cloneNode()
        newProj.textContent = projTitle
        newProj.setAttribute('class', projTitle.replace(/\s+/g, '-')) // class names can't have spaces
        projectTitles.appendChild(newProj)
        storeProject(newProj)

        currentProject.children[0].querySelector('b').textContent = projTitle
        currentProject.setAttribute('data-storage-letter', newProj.getAttribute('data-storage-letter'))

        // remove all tasks except first hidden empty taskCard
        if (currentProject.children[1].children[1]) {
            for (let i = currentProject.children[1].children.length-1; i > 0; i--) {
                currentProject.children[1].children[i].remove()
            }
        }
    }
    projectTitleForm.reset()
    dialogTitle.close();
}
  
const cancelBtn = document.getElementById('cancelTitle')
cancelBtn.addEventListener('click', () => {
    projectTitleForm.reset()
    dialogTitle.close()
})
projectTitleForm.addEventListener('submit', handleProjectTitleSubmit);

addProjectBtn.addEventListener('click', () => dialogTitle.showModal())

function getProjects() {
    // Step 1: Get all keys from localStorage
    const keys = Object.keys(localStorage);

    const projectKeys = keys.filter(key => key.startsWith('project'));

    const keyValuePairs = projectKeys.map(key => ({
        key: key,
        value: localStorage.getItem(key) // Get the corresponding value for each key
    }));

    keyValuePairs.sort((a, b) => a.value.localeCompare(b.value));

    // const sortedKeys = keyValuePairs.map(pair => pair.key);

    return keyValuePairs

}

function loadProjectTitles() {
    const projectList = getProjects().slice(1); // Retrieve sorted projects from localStorage (except home)
    
    projectList.forEach(project => {
        const projTitle = project.key.replace('project-', ''); // Remove 'project-' prefix from keys
        const storageLetter = project.value; // Storage letter is the value

        // Create a new project button
        let newProj = projectTemplate.cloneNode();
        newProj.textContent = projTitle;
        newProj.setAttribute('class', projTitle.replace(/\s+/g, '-')); // Class name can't have spaces
        newProj.setAttribute('data-storage-letter', storageLetter); // Set storage letter

        projectTitles.appendChild(newProj);
    });
}

function projectLoadTasks() {
    const projectList = getProjects()
    projectList.forEach(project => {
        console.log(projectList, project)
        const projectName = project.key.substring(8)
        const projectBtn = document.querySelector(`button.${projectName}`)


        projectBtn.addEventListener('click', () => {
            const currentProjectTitleElement = document.querySelector('#currentProjectTitle > b');
            const currentProjectTitle = currentProjectTitleElement.textContent
            if (currentProjectTitle !== projectName) {
                for (let i = currentProject.children[1].children.length-1; i > 0; i--) {
                    currentProject.children[1].children[i].remove()
                }
                currentProjectTitleElement.textContent = projectName
            } else {
                return
            }
            loadTasks(projectName)

        })
    }
)}

initProjectStorage()
loadProjectTitles()
projectLoadTasks()

// localStorage.clear()
export {handleProjectTitleSubmit, loadProjectTitles, storeProject}