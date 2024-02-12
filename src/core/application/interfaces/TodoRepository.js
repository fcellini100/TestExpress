class TodoRepository {
  add(_todo) {
    throw new Error("Method 'add' must be implemented.");
  }

  findById(_todoId) {
    throw new Error("Method 'findById' must be implemented.");
  }

  findByUserId(_userId) {
    throw new Error("Method 'findByUserId' must be implemented.");
  }

  update(_todo) {
    throw new Error("Method 'update' must be implemented.");
  }

  delete(_todoId) {
    throw new Error("Method 'delete' must be implemented.");
  }
}

module.exports = TodoRepository;
