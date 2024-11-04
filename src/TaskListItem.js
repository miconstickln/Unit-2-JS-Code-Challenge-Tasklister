class TaskListItem {
  constructor(description) {
    this.description = description;
  }

  // Method to do a task item
  render() {
    return `
          <div class="task-item">
            <p>${this.description}</p>
            <button class="delete-btn">Delete</button>
          </div>
        `;
  }
}
