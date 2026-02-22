import { useMutation, useQuery } from "@apollo/client/react";
import { useState, type JSX } from "react";
import { ADD_TODO } from "../graphQL/mutations";
import { v4 as uuidv4 } from "uuid";
import { GET_TODOS } from "../graphQL/query";

const Todo = (): JSX.Element => {
  const [tags, setTags] = useState<string>("");
  const [title, setTitle] = useState("");
  const { data } = useQuery(GET_TODOS);
  const [addTodo] = useMutation(ADD_TODO, {
    optimisticResponse: {
      createTodo: {
        __typename: "Todo",
        id: uuidv4(),
        title,
        tags: tags.split(",").map((tag) => tag.trim()),
      },
    },
    update: (cache, { data }) => {
      if (!data) return;
      const { createTodo } = data;
      const existing = cache.readQuery({
        query: GET_TODOS,
      });
      if (!existing) return;
      cache.writeQuery({
        query: GET_TODOS,
        data: {
          getAllTodos: [...existing.getAllTodos, createTodo],
        },
      });
    },
  });
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({
      variables: {
        title,
        tags: tags.split(",").map((tag) => tag.trim()),
      },
    });
  };
  return (
    <>
      <h1>GraphQL Todo</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Enter Todo Title"
        />
        <input
          type="text"
          onChange={(e) => setTags(e.target.value)}
          value={tags}
          placeholder="Enter Tags"
        />
        <button type="submit">Add Todo</button>
      </form>
      {data &&
        data.getAllTodos.length > 0 &&
        data.getAllTodos.map((todo) => {
          return (
            <div key={todo.id}>
              <span className="text-red-500" style={{ marginRight: "20px" }}>
                {todo.title}
              </span>
              <span className="text-red-500">{todo.tags.join(", ")}</span>
            </div>
          );
        })}
    </>
  );
};
export default Todo;
