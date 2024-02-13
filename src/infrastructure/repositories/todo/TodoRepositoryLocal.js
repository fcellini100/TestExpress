const TodoRepository = require('../../../core/application/interfaces/TodoRepository');
const Todo = require('../../../core/domain/todo');

class TodoRepositoryLocal extends TodoRepository {
  constructor() {
    super();
    this.todos = [
      new Todo('1', '6', 'Optimize query performance', false),
      new Todo('2', '4', 'Implement new feature', true),
      new Todo('3', '1', 'Design a new logo', false),
      new Todo('4', '7', 'Set up a new development environment', true),
      new Todo('5', '4', 'Update website design', false),
      new Todo('6', '6', 'Update dependencies', true),
      new Todo('7', '4', 'Clean up old files', false),
      new Todo('8', '6', 'Deploy to staging environment', true),
      new Todo('9', '1', 'Run end-to-end tests', false),
      new Todo('10', '6', 'Optimize image loading', true),
      new Todo('11', '5', 'Review pull requests', false),
      new Todo('12', '1', 'Fix memory leak issues', true),
      new Todo('13', '6', 'Refactor database schema', false),
      new Todo('14', '5', 'Prepare presentation for clients', true),
      new Todo('15', '1', 'Research on new technologies', false),
      new Todo('16', '8', 'Write unit tests for new features', true),
      new Todo('17', '5', 'Schedule team meeting', false),
      new Todo('18', '2', 'Plan marketing strategy', true),
      new Todo('19', '4', 'Complete project documentation', false),
      new Todo('20', '6', 'Fix bug in login flow', true),
    ];
  }

  add(todoData) {
    const id = (this.todos.length + 1).toString();
    const newTodo = new Todo(id, ...todoData);
    newTodo.validate();
    this.todos.push(newTodo);
    return newTodo;
  }

  async update(updatedTodo) {
    const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index === -1) {
      throw new Error('TODO not found.');
    }
    this.todos[index] = updatedTodo;
    return updatedTodo;
  }

  async delete(id) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index === -1) {
      throw new Error('TODO not found.');
    }
    this.todos = this.todos.filter(todo => todo.id !== id);
    return true;
  }

  getTodoById(id) {
    return this.todos.find(todo => todo.id === id);
  }

  getTodosByUser(userId) {
    return this.todos.filter(todo => todo.userId === userId);
  }
}

module.exports = TodoRepositoryLocal;
