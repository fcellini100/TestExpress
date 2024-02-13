class Todo {
  constructor(id, userId, title, completed = false) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.completed = completed;
  }

  validate() {
    if (!this.title) {
      throw new Error('Title cannot be empty.');
    }
  }
}

module.exports = Todo;
