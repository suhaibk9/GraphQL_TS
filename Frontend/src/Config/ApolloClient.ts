import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const GRAPHQL_ENDPOINT: string =
  import.meta.env.VITE_GRAPHQL_ENDPOINT ?? "http://localhost:3000/graphql";

const client: ApolloClient = new ApolloClient({
  link: new HttpLink({ uri: GRAPHQL_ENDPOINT }),
  cache: new InMemoryCache(),
});

export default client;
