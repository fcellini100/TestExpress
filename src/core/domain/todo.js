class Todo {
  constructor(id, userId, title, completed = false) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.completed = completed;
  }

  markCompleted() {
    this.completed = true;
  }

  updateTitle(newTitle) {
    if (!newTitle) {
      throw new Error('Title cannot be empty.');
    }
    this.title = newTitle;
  }

  assignToUser(newUserId) {
    this.userId = newUserId;
  }
}

module.exports = Todo;
