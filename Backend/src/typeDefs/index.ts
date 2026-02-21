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
`;
export default typeDefs;
