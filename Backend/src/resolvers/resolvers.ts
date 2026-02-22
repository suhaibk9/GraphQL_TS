import { GraphQLResolveInfo } from "graphql";
import Todo from "../models/todo";
import TodoRepository from "../repository/todoRepository";
import TodoService from "../services/todoService";
import ITodo from "../types/todo";

const todoService = new TodoService(new TodoRepository(Todo));

// Arg types for each resolver
interface CreateTodoArgs {
  title: string;
  tags: string[];
}

const resolvers = {
  Query: {
    getAllTodos: async (): Promise<ITodo[]> => {
      return await todoService.getAllTodos();
    },
  },
  Mutation: {
    createTodo: async (
      _parent: unknown,
      args: CreateTodoArgs,
      _context: unknown,
      _info: GraphQLResolveInfo,
    ): Promise<ITodo> => {
      const { title, tags } = args;
      return await todoService.createTodo(title, tags);
    },
  },
};

export default resolvers;
