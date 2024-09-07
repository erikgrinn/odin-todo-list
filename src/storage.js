function storeTask(task) {
  let newTaskNum = task.getAttribute(`data-task-num`)
  const taskCardForm = document.querySelector(`form#${currentProject.getAttribute('data-storage-letter')}${newTaskNum}`);

  const taskTitle = taskCardForm.querySelector('#taskTitle');
  const taskDescription = taskCardForm.querySelector('#taskDescription');
  const taskDate = taskCardForm.querySelector('#taskDate');
  const taskPriority = taskCardForm.querySelector('#taskPriority');

  let taskData = {
      taskTitle: taskTitle.value.trim(),
      taskDescription: taskDescription.value.trim(),
      taskDate: taskDate.value.trim(),
      taskPriority: taskPriority.value.trim()
  };

    // change event listeners
  [taskTitle, taskDescription, taskDate, taskPriority].forEach(input => {
    input.addEventListener('change', () => {
        taskData[input.id] = input.value.trim();
        localStorage.setItem(taskCardForm.id, JSON.stringify(taskData));
    });
});

  localStorage.setItem(`${taskCardForm.id}`, JSON.stringify(taskData));
}


function saveTask(target) {
  let newTaskNum = target.getAttribute(`data-task-num`)
  const taskCardForm = document.querySelector(`form#${currentProject.getAttribute('data-storage-letter')}${newTaskNum}`);

  const taskTitle = taskCardForm.querySelector('#taskTitle');
  const taskDescription = taskCardForm.querySelector('#taskDescription');
  const taskDate = taskCardForm.querySelector('#taskDate');
  const taskPriority = taskCardForm.querySelector('#taskPriority');

  let taskData = {
      taskTitle: taskTitle.value.trim(),
      taskDescription: taskDescription.value.trim(),
      taskDate: taskDate.value.trim(),
      taskPriority: taskPriority.value.trim()
  };

  localStorage.setItem(`${taskCardForm.id}`, JSON.stringify(taskData));
}

function deleteTask(target) {
  const taskSection = currentProject.children[1]

  // remove target task card
  const taskCard = target.closest('.taskCard')
  const taskCardForm = target.closest('form');
  const taskId = taskCardForm.id; 
  localStorage.removeItem(`${taskId}`);
  taskCard.remove();

  // remove what was the last task card from localStorage, (can be redundant)
  const letterPart = taskId.match(/[a-zA-Z]+/)[0]; 
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

export {storeTask, saveTask, deleteTask}