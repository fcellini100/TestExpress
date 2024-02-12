class UserRepository {
  add(_user) {
    throw new Error("Method 'add' must be implemented.");
  }

  getUserById(_userId) {
    throw new Error("Method 'getUserById' must be implemented.");
  }

  update(_user) {
    throw new Error("Method 'update' must be implemented.");
  }

  delete(_userId) {
    throw new Error("Method 'delete' must be implemented.");
  }

  getAllUsers() {
    throw new Error("Method 'getAllUsers' must be implemented.");
  }
}

module.exports = UserRepository;
