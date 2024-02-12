class UserRepository {
  add(_user) {
    throw new Error("Method 'add' must be implemented.");
  }

  findById(_userId) {
    throw new Error("Method 'findById' must be implemented.");
  }

  update(_user) {
    throw new Error("Method 'update' must be implemented.");
  }

  delete(_userId) {
    throw new Error("Method 'delete' must be implemented.");
  }

  findAll() {
    throw new Error("Method 'findAll' must be implemented.");
  }
}

module.exports = UserRepository;
