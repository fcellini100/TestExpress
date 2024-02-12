const ManageUsersUseCase = require('../../core/use-cases/user/ManageUsersUseCase');
const UserRepositoryLocal = require('../../infrastructure/repositories/UserRepositoryLocal');

const userRepository = new UserRepositoryLocal();

const manageUsersUseCase = new ManageUsersUseCase(userRepository);

exports.createUser = async (req, res) => {
  try {
    const user = await manageUsersUseCase.addUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await manageUsersUseCase.findUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await manageUsersUseCase.updateUser(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await manageUsersUseCase.deleteUser(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllUsers = async (_req, res) => {
  try {
    const users = await manageUsersUseCase.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
