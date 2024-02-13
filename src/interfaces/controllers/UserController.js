const ManageUsersUseCase = require('../../core/use-cases/user/ManageUsersUseCase');
const UserRepositoryLocal = require('../../infrastructure/repositories/user/UserRepositoryLocal');

const userRepository = new UserRepositoryLocal();

const manageUsersUseCase = new ManageUsersUseCase(userRepository);

createUser = async (req, res) => {
  try {
    const user = await manageUsersUseCase.addUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

getUserById = async (req, res) => {
  try {
    const user = await manageUsersUseCase.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

updateUser = async (req, res) => {
  try {
    const user = await manageUsersUseCase.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

deleteUser = async (req, res) => {
  try {
    await manageUsersUseCase.deleteUser(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

getAllUsers = async (_req, res) => {
  try {
    const users = await manageUsersUseCase.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
};
