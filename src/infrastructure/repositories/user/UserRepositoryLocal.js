const UserRepository = require('../../../core/application/interfaces/UserRepository');
const User = require('../../../core/domain/user');

class UserRepositoryLocal extends UserRepository {
  constructor() {
    super();
    this.users = [
      new User('1', 'John Doe', 'john.doe@example.com'),
      new User('2', 'Jane Smith', 'jane.smith@example.com'),
      new User('3', 'Alice Johnson', 'alice.johnson@example.com'),
      new User('4', 'Bob Williams', 'bob.williams@example.com'),
      new User('5', 'Charlie Brown', 'charlie.brown@example.com'),
      new User('6', 'Diana Prince', 'diana.prince@example.com'),
      new User('7', 'Evan Wright', 'evan.wright@example.com'),
      new User('8', 'Fiona Gallagher', 'fiona.gallagher@example.com'),
      new User('9', 'George Lucas', 'george.lucas@example.com'),
      new User('10', 'Hannah Abbott', 'hannah.abbott@example.com'),
    ];
  }

  async add(user) {
    const id = this.users.length + 1;
    const newUser = new User(id.toString(), user.name, user.email);
    this.users.push(newUser);
    return newUser;
  }

  async update(updatedUser) {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index === -1) {
      throw new Error('User not found.');
    }
    this.users[index] = updatedUser;
    return updatedUser;
  }

  async delete(userId) {
    const index = this.users.findIndex(user => user.id === userId);
    if (index === -1) {
      throw new Error('User not found.');
    }
    this.users = this.users.filter(user => user.id !== userId);
    return true;
  }

  async getUserById(userId) {
    return this.users.find(user => user.id === userId);
  }

  async getAllUsers() {
    return this.users;
  }
}

module.exports = UserRepositoryLocal;
