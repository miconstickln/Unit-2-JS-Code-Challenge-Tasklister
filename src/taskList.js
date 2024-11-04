class TaskList {
  constructor() {
    this.tasks = []; // This is an Array since its a square bracket  to hold items in the task
  }

  //Method to Add tasks to the list
  addTask(taskItem) {
    this.tasks.push(taskItem);
  }

  // All tasks to be rendered by the method
  render() {
    return this.tasks.map((task) => task.render()).join("");
  }
}
