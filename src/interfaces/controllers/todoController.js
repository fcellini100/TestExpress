const ManageTodosUseCase = require('../../core/use-cases/todo/ManageTodosUseCase');
const TodoRepositoryLocal = require('../../infrastructure/repositories/todo/TodoRepositoryLocal');

const todoRepository = new TodoRepositoryLocal();

const manageTodosUseCase = new ManageTodosUseCase(todoRepository);

createTodo = async (req, res) => {
  try {
    const todo = await manageTodosUseCase.addTodo(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

getTodoById = async (req, res) => {
  try {
    const todo = await manageTodosUseCase.getTodoById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found.' });
    }
    res.json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

updateTodo = async (req, res) => {
  try {
    const todo = await manageTodosUseCase.updateTodo(req.params.id, req.body);
    res.json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

deleteTodo = async (req, res) => {
  try {
    await manageTodosUseCase.deleteTodo(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

getTodosByUser = async (req, res) => {
  try {
    const users = await manageTodosUseCase.getTodosByUser(req.params.id);
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
  getTodosByUser,
};
