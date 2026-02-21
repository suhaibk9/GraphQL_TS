import TodoRepository from "../repository/todoRepository";
import ITodo from "../types/todo";

class TodoService {
  constructor(public todoRepository: TodoRepository) {}

  async getAllTodos(): Promise<ITodo[]> {
    return await this.todoRepository.getAllTodos();
  }

  async createTodo(title: string, tags: string[]): Promise<ITodo> {
    return await this.todoRepository.createTodo(title, tags);
  }

  async deleteTodo(id: string): Promise<ITodo | null> {
    return await this.todoRepository.deleteTodo(id);
  }

  async updateTodo(
    id: string,
    title: string,
    tags: string[],
  ): Promise<ITodo | null> {
    return await this.todoRepository.updateTodo(id, title, tags);
  }
}

export default TodoService;
