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
const dialog = document.querySelector('dialog')


function addProjectTitle(event) {



    // const projName = prompt('enter project title')
    // let newProj = projectTemplate.cloneNode()
    // newProj.textContent = projName
    // newProj.setAttribute('class', newProj.textContent.replace(/\s+/g, '-')) // class names can't have spaces
    // projectTitles.appendChild(newProj)
}

// addProjectBtn.addEventListener('click', addProjectTitle)
addProjectBtn.addEventListener('click', () => dialog.showModal())

const projectTitleForm = document.getElementById('projectTitleForm')
projectTitleForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value

    let newProj = projectTemplate.cloneNode()
    newProj.textContent = title
    newProj.setAttribute('class', title.replace(/\s+/g, '-')) // class names can't have spaces
    projectTitles.appendChild(newProj)

    projectTitleForm.reset()
    dialog.close();
})

const cancelBtn = document.getElementById('cancel')
cancelBtn.addEventListener('click', () => {
  projectTitleForm.reset()
  dialog.close()
})

