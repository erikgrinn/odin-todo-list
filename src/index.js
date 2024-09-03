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
const dialogTitle = document.querySelector('#dialogTitle')


function addProjectTitle(event) {
    dialogTitle.showModal()

    const projectTitleForm = document.getElementById('projectTitleForm')
    projectTitleForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const title = document.getElementById('newTitle').value.trim();
        if (title) { //needed to prevent empty buttons being added
            let newProj = projectTemplate.cloneNode()
            newProj.textContent = title
            newProj.setAttribute('class', title.replace(/\s+/g, '-')) // class names can't have spaces
            projectTitles.appendChild(newProj)
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

addProjectBtn.addEventListener('click', addProjectTitle)

