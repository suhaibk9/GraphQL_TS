import { useMutation, useQuery } from "@apollo/client/react";
import { useState, type JSX, type FormEvent } from "react";
import { ADD_TODO } from "../graphQL/mutations";
import { GET_TODOS } from "../graphQL/query";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  __typename?: "Todo";
  id: string;
  title: string;
  tags: string[];
  completed: boolean;
}

interface GetTodosData {
  getAllTodos: Todo[];
}

interface AddTodoData {
  createTodo: Todo;
}

interface AddTodoVariables {
  title: string;
  tags: string[];
}

const Todo = (): JSX.Element => {
  const [tags, setTags] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const { data } = useQuery<GetTodosData>(GET_TODOS);

  const [addTodo] = useMutation<AddTodoData, AddTodoVariables>(ADD_TODO, {
    optimisticResponse: {
      createTodo: {
        __typename: "Todo",
        id: uuidv4(),
        title,
        tags: tags.split(",").map((t) => t.trim()),
        completed: false,
      },
    },
    update: (cache, { data }) => {
      if (!data) return;

      const existing = cache.readQuery<GetTodosData>({
        query: GET_TODOS,
      });

      if (!existing) return;

      cache.writeQuery<GetTodosData>({
        query: GET_TODOS,
        data: {
          getAllTodos: [...existing.getAllTodos, data.createTodo],
        },
      });
    },
  });

  const handleAddTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const parsedTags = tags.split(",").map((t) => t.trim());

    addTodo({
      variables: {
        title,
        tags: parsedTags,
      },
    });

    setTitle("");
    setTags("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>GraphQL Todo</h2>

      <form onSubmit={handleAddTodo} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          style={{ marginRight: "8px" }}
        />
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma separated)"
          style={{ marginRight: "8px" }}
        />
        <button type="submit">Add</button>
      </form>

      {data?.getAllTodos.map((todo) => (
        <div key={todo.id} style={{ marginBottom: "10px" }}>
          <strong>{todo.title}</strong>
          <div style={{ fontSize: "0.9rem" }}>
            {todo.tags.join(", ")}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;