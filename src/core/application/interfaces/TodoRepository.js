class TodoRepository {
  add(_todo) {
    throw new Error("Method 'add' must be implemented.");
  }

  update(_todo) {
    throw new Error("Method 'update' must be implemented.");
  }

  delete(_todoId) {
    throw new Error("Method 'delete' must be implemented.");
  }

  getTodoById(_todoId) {
    throw new Error("Method 'getTodoById' must be implemented.");
  }

  getTodosByUser(_userId) {
    throw new Error("Method 'getTodosByUser' must be implemented.");
  }
}

module.exports = TodoRepository;
