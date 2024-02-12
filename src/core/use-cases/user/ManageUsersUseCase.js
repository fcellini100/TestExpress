const User = require('../../domain/user');

class ManageUsersUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async addUser(userData) {
    const newUser = new User(null, userData.name, userData.email);
    newUser.validate();

    return await this.userRepository.add(newUser);
  }

  async getUserById(id) {
    return await this.userRepository.getUserById(id);
  }

  async updateUser(id, userData) {
    const updatedUser = new User(id, userData.name, userData.email);
    updatedUser.validate();

    return await this.userRepository.update(updatedUser);
  }

  async deleteUser(id) {
    return await this.userRepository.delete(id);
  }

  async getAllUsers() {
    return await this.userRepository.getAllUsers();
  }
}

module.exports = ManageUsersUseCase;
