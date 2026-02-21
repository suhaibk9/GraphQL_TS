import TodoRepository from "../repository/todoRepository";
import TodoService from "../services/todoService";
import Todo from "../models/todo";
const todoService = new TodoService(new TodoRepository(Todo));
const resolvers = {
  Query: {
    getAllTodos: async () => {
      return await todoService.getAllTodos();
    },
  },
};
export default resolvers;
