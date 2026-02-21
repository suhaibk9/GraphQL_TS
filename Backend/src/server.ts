import mongoose from "mongoose";
import express from "express";
import serverConfig from "./config/serverConfig";
import { ApolloServer } from "@apollo/server";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers/resolvers";
import cors from "cors";
import { expressMiddleware } from "@as-integrations/express5";

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer(): Promise<void> {
  await server.start();
  await mongoose.connect(serverConfig.DB_URL);
  console.log("Connected To MongoDB");

  app.use(express.json());
  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  app.listen(serverConfig.PORT, () => {
    console.log(`Server running on port ${serverConfig.PORT}`);
  });
}

startServer();
