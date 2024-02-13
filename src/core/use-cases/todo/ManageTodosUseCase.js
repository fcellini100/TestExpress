const Todo = require('../../domain/todo');

class ManageTodosUseCase {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  async addTodo(todoData) {
    const newTodo = new Todo(null, todoData.userId, todoData.title, false);
    newTodo.validate();

    return await this.todoRepository.add(newTodo);
  }

  async getTodoById(id) {
    return await this.todoRepository.getTodoById(id);
  }

  async getTodosByUser(userId) {
    return await this.todoRepository.getTodosByUser(userId);
  }

  async updateTodo(id, todoData) {
    const updatedTodo = new Todo(
      id,
      todoData.userId,
      todoData.title,
      todoData.completed
    );
    updatedTodo.validate();

    return await this.todoRepository.update(updatedTodo);
  }

  async deleteTodo(id) {
    return await this.todoRepository.delete(id);
  }
}

module.exports = ManageTodosUseCase;
