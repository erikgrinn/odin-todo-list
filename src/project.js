import { loadTasks } from "./tasks.js";

const projectTitles = document.getElementById("projectTitles");
const projectTemplate = document.createElement("button");
const delProjectBtn = document.getElementById("deleteProject");
const addProjectBtn = document.getElementById("addProject");
const deleteProjectDialog = document.getElementById("deleteProjectDialog");
const dialogTitle = document.querySelector("#dialogTitle");
const projectTitleForm = document.getElementById("projectTitleForm");
const currentProject = document.getElementById("currentProject");

function initProjectStorage() {
  const currentProjectTitle = document.querySelector(
    "#currentProjectTitle > b",
  ).textContent;
  localStorage.setItem(
    `project-${currentProjectTitle}`,
    currentProject.getAttribute("data-storage-letter"),
  );
}

function getCurrentProjectTitle() {
  return currentProject.children[0].querySelector("b").textContent;
}

function deleteProject(event) {
  const projects = getProjects();
  // Get the select dropdown
  const projectSelect = document.getElementById("projectSelect");

  // Clear the previous options in the select dropdown
  projectSelect.innerHTML = "";

  // Loop through each project and create an <option> element
  projects.forEach((project) => {
    const option = document.createElement("option"); // Use document.createElement
    option.textContent = project.key.substring(8); // Remove 'project-' prefix
    option.value = project.key; // Set the value to the full key (for deletion)
    projectSelect.appendChild(option); // Add the option to the select dropdown
  });

  const deleteSubmitBtn = document.getElementById("confirmDeleteBtn");
  deleteSubmitBtn.addEventListener("click", () => {
    const selectedProjectKey = projectSelect.value; // Get the selected project's key

    if (selectedProjectKey) {
      // Remove the project from localStorage
      localStorage.removeItem(selectedProjectKey);

      // Remove the project button from the DOM
      const projectClass = selectedProjectKey.substring(8).replace(/\s+/g, "-"); // Class from project name
      const projectButton = document.querySelector(`.${projectClass}`); // Select the corresponding project button
      if (projectButton) {
        projectButton.remove(); // Remove the button from DOM
      }

      // Optionally, close the dialog
      deleteProjectDialog.close();
    }
  });

  // Show the dialog
  deleteProjectDialog.showModal();
}

function storeProject(newProject) {
  const sortedProjects = getProjects();
  const lastStoredValue = sortedProjects[sortedProjects.length - 1].value;
  const lastLetter = lastStoredValue.charAt(0);
  const nextLetter = String.fromCharCode(lastLetter.charCodeAt(0) + 1);
  newProject.setAttribute("data-storage-letter", nextLetter);
  localStorage.setItem(
    `project-${newProject.textContent}`,
    newProject.getAttribute("data-storage-letter"),
  );

  // console.log(sortedProjects)
  // for (let i = 1; i < sortedProjects.length; i++) {
  //     let prevLetter = sortedProjects[i - 1].value;
  //     let currentLetter = sortedProjects[i].value;
  //     console.log(prevLetter, currentLetter)
  //     // Compare ASCII values of consecutive letters
  //     let diff = currentLetter.charCodeAt(0) - prevLetter.charCodeAt(0);
  //     console.log(diff)
  //     if (diff > 1) {
  //         const skippedLetter = String.fromCharCode(lastLetter.charCodeAt(0) + 1)
  //         console.log(skippedLetter)
  //         newProject.setAttribute('data-storage-letter', skippedLetter)
  //         localStorage.setItem(`${sortedProjects[i].key}`, newProject.getAttribute('data-storage-letter'))
  //     }
  //     // else {
  //     //     // const letter = String.fromCharCode(lastLetter.charCodeAt(0) + 1)
  //     //     newProject.setAttribute('data-storage-letter', currentLetter)
  //     //     localStorage.setItem(`project-${newProject.textContent}`, newProject.getAttribute('data-storage-letter'))
  //     // }
  // }
}

function handleProjectTitleSubmit(event) {
  event.preventDefault();
  const projTitle = document.getElementById("newTitle").value.trim();

  if (projTitle) {
    // needed to prevent empty buttons being added
    let newProj = projectTemplate.cloneNode();
    newProj.textContent = projTitle;
    newProj.setAttribute("class", projTitle.replace(/\s+/g, "-")); // class names can't have spaces
    projectTitles.appendChild(newProj);
    storeProject(newProj);

    currentProject.children[0].querySelector("b").textContent = projTitle;
    currentProject.setAttribute(
      "data-storage-letter",
      newProj.getAttribute("data-storage-letter"),
    );

    // remove all tasks except first hidden empty taskCard
    if (currentProject.children[1].children[1]) {
      for (let i = currentProject.children[1].children.length - 1; i > 0; i--) {
        currentProject.children[1].children[i].remove();
      }
    }
  }
  loadProjectTasks();
  projectTitleForm.reset();
  dialogTitle.close();
}

const cancelBtn = document.getElementById("cancelTitle");
cancelBtn.addEventListener("click", () => {
  projectTitleForm.reset();
  dialogTitle.close();
});

function getProjects() {
  // Step 1: Get all keys from localStorage
  const keys = Object.keys(localStorage);

  const projectKeys = keys.filter((key) => key.startsWith("project"));

  const keyValuePairs = projectKeys.map((key) => ({
    key: key,
    value: localStorage.getItem(key), // Get the corresponding value for each key
  }));

  keyValuePairs.sort((a, b) => a.value.localeCompare(b.value));

  // const sortedKeys = keyValuePairs.map(pair => pair.key);

  return keyValuePairs;
}

function loadProjectTitles() {
  const projectList = getProjects().slice(1); // Retrieve sorted projects from localStorage (except home)

  projectList.forEach((project) => {
    const projTitle = project.key.replace("project-", ""); // Remove 'project-' prefix from keys
    const storageLetter = project.value; // Storage letter is the value

    // Create a new project button
    let newProj = projectTemplate.cloneNode();
    newProj.textContent = projTitle;
    newProj.setAttribute("class", projTitle.replace(/\s+/g, "-")); // Class name can't have spaces
    newProj.setAttribute("data-storage-letter", storageLetter); // Set storage letter

    projectTitles.appendChild(newProj);
  });
  loadProjectTasks();
}

function loadProjectTasks() {
  const projectList = getProjects();
  projectList.forEach((project) => {
    const projectName = project.key.substring(8);
    const projectBtn = document.querySelector(`button.${projectName}`);

    projectBtn.addEventListener("click", () => {
      const currentProjectTitleElement = document.querySelector(
        "#currentProjectTitle > b",
      );
      const currentProjectTitle = currentProjectTitleElement.textContent;
      if (currentProjectTitle !== projectName) {
        for (
          let i = currentProject.children[1].children.length - 1;
          i > 0;
          i--
        ) {
          currentProject.children[1].children[i].remove();
        }
        currentProjectTitleElement.textContent = projectName;
        loadTasks(projectName);
      } else {
        return;
      }
    });
  });
}

projectTitleForm.addEventListener("submit", handleProjectTitleSubmit);
addProjectBtn.addEventListener("click", () => dialogTitle.showModal());
delProjectBtn.addEventListener("click", deleteProject);

initProjectStorage();
loadProjectTitles();

// localStorage.clear()
export { handleProjectTitleSubmit, loadProjectTitles, storeProject };
