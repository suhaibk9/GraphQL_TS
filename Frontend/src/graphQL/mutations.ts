import { gql, type TypedDocumentNode } from "@apollo/client";

interface Todo {
  __typename?: "Todo";
  id: string;
  title: string;
  tags: string[];
}

export interface AddTodoMutationData {
  createTodo: Todo;
}

export interface AddTodoMutationVariables {
  title: string;
  tags: string[];
}

const ADD_TODO: TypedDocumentNode<
  AddTodoMutationData,
  AddTodoMutationVariables
> = gql`
  mutation addTodo($title: String!, $tags: [String]!) {
    createTodo(title: $title, tags: $tags) {
      id
      title
      tags
    }
  }
`;

export { ADD_TODO };
