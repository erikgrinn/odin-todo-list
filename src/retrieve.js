function loadTasks(project) {
    // Get the task ID (same as used when saving to localStorage)
    const taskId = `task-${taskCardForm.id}`;

    // Retrieve the task data from localStorage
    const storedTaskData = localStorage.getItem(taskId);

    // Check if there is any data in localStorage for this task
    if (storedTaskData) {
        // Parse the JSON string back into an object
        const taskData = JSON.parse(storedTaskData);

        // Find the form elements
        const taskTitle = taskCardForm.querySelector('#newTaskTitle');
        const taskDescription = taskCardForm.querySelector('#newTaskDescription');
        const taskDate = taskCardForm.querySelector('#newTaskDate');
        const taskPriority = taskCardForm.querySelector('.priority');

        // Populate the form fields with the retrieved data
        taskTitle.value = taskData.taskTitle;
        taskDescription.value = taskData.taskDescription;
        taskDate.value = taskData.taskDate;
        taskPriority.value = taskData.taskPriority;
    } else {
        console.log("No task found in localStorage for this ID");
    }
}