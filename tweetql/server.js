import { ApolloServer, gql } from "apollo-server";

//SDL of GraphQL, Schema Definition Language
const typeDefs = gql`
    type Query {
        text: String
        hello: String
    }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
    console.log(`running server: ${url}`);
});
