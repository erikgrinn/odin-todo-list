import "./styles.css";
import {storageAvailable} from "./storage.js";

// if (storageAvailable("localStorage")) {
//     console.log('Yippee! We can use localStorage awesomeness')
//   } else {
//     console.log('Too bad, no localStorage for us')
//   }


const projectTitles = document.getElementById('projectTitles')
const projectTemplate = document.createElement('button')
const addProjectBtn = document.getElementById('addProject')
addProjectBtn.addEventListener('click', addProjectTitle)

function addProjectTitle(event) {
    // const dialog = document.createElement('dialog')
    const projName = prompt('enter project title')
    let newProj = projectTemplate.cloneNode()
    newProj.textContent = projName
    newProj.setAttribute('class', newProj.textContent.replace(/\s+/g, '-')) // class names can't have spaces
    projectTitles.appendChild(newProj)
}


console.log(projectTitles)
