import ITodo from "../types/todo";
import { Model } from "mongoose";

class TodoRepository {
  constructor(public todoModel: Model<ITodo>) {}

  async getAllTodos(): Promise<ITodo[]> {
    return this.todoModel.find();
  }

  async createTodo(title: string, tags: string[]): Promise<ITodo> {
    return await this.todoModel.create({ title, completed: false, tags });
  }

  async deleteTodo(id: string): Promise<ITodo | null> {
    return await this.todoModel.findByIdAndDelete(id);
  }

  async updateTodo(
    id: string,
    title: string,
    tags: string[],
  ): Promise<ITodo | null> {
    return await this.todoModel.findByIdAndUpdate(
      id,
      { title, tags },
      { new: true },
    );
  }
}

export default TodoRepository;
