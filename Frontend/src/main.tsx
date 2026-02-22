import { ApolloProvider } from "@apollo/client/react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import client from "./Config/ApolloClient";

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
