# GraphQL TS — Full-Stack Todo App

A full-stack Todo application built with **GraphQL**, **Apollo**, **TypeScript**, **React**, and **MongoDB**.

---

## Project Overview

- **Backend** — Apollo Server (Express) + GraphQL + Mongoose
- **Frontend** — React + Vite + Apollo Client + TypeScript

---

## Project Structure

```
GraphQL_TS/
├── Backend/
│   ├── src/
│   │   ├── config/          # Server config (env, DB connection)
│   │   ├── models/          # Mongoose models
│   │   ├── repository/      # Data access layer
│   │   ├── resolvers/       # GraphQL resolvers
│   │   ├── services/        # Business logic layer
│   │   ├── typeDefs/        # GraphQL schema definitions
│   │   ├── types/           # Shared TypeScript types
│   │   └── server.ts        # Entry point
│   ├── .env
│   ├── tsconfig.json
│   └── package.json
│
└── Frontend/
    ├── src/
    │   ├── Components/      # React components (Todo, etc.)
    │   ├── Config/          # Apollo Client setup
    │   ├── graphQL/         # Typed queries & mutations
    │   ├── App.tsx
    │   └── main.tsx
    ├── .env
    ├── vite.config.ts
    └── package.json
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB running locally or a MongoDB Atlas URI

---

### Backend

1. Navigate to the backend directory:

   ```bash
   cd Backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file (see `.env` for reference):

   ```env
   MONGO_PWD=xxxxxxxxxxxxxxxxxxxx
   MONGO_USER=xxxxxxxxxxxxxxxxxxxx
   MONGO_URL=mongodb+srv://<MONGO_USER>:<MONGO_PWD>@cluster0.xxxxxxx.mongodb.net/?appName=Cluster0/todoDB
   PORT=3000
   ```

4. Start the dev server:

   ```bash
   npm run dev
   ```

   The GraphQL server will be available at `http://localhost:4000/graphql`.

---

### Frontend

1. Navigate to the frontend directory:

   ```bash
   cd Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```env
   VITE_GRAPHQL_ENDPOINT=http://localhost:3000/graphql
   ```

4. Start the dev server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.
