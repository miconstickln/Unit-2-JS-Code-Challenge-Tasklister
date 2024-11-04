document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  const taskForm = document.getElementById("create-task-form");

  // Use the function to render task list in the DOM
  const renderApp = () => (listContainer.innerHTML = taskList.render());

  // Add Form Behavior Here!
  // Perharps add event listener at this piont to help with form submission
  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // The event.prevent default surpresses the default form submission

    const taskDescription = document.getElementById(
      "new-task-description"
    ).value;

    if (taskDescription.trim() !== "") {
      // Consider creating a TaskListItem and add  to TaskList
      const newTask = new TaskListItem(taskDescription);
      taskList.addTask(newTask);

      // Render again the task list at this point after adding a new task
      renderApp();

      // Do away with the input part
      taskForm.reset();
    }
  });

  // Add event listener for delete buttons (event delegation)
  listContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      const taskItem = event.target.parentElement;
      taskItem.remove();
      // Remove the task item from DOM
    }
  });
});
