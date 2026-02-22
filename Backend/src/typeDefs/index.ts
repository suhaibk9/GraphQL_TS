const typeDefs = `
type Todo{
    id:ID!
    title:String!
    completed:Boolean!
    tags:[String]
}
type Query{
    getAllTodos:[Todo]!
}
type Mutation{
    createTodo(title:String!,tags:[String]!):Todo!
}
`;
export default typeDefs;
