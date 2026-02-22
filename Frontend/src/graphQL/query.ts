import { gql, type TypedDocumentNode } from "@apollo/client";
type Todo = {
  id: string;
  title: string;
  tags: string[];
};
interface GetTodosData {
  getAllTodos: Todo[];
}
const GET_TODOS: TypedDocumentNode<GetTodosData> = gql`
  query GetTodos {
    getAllTodos {
      id
      title
      tags
    }
  }
`;
export {GET_TODOS}