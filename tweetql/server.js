import { ApolloServer, gql } from "apollo-server";

const Tweets = [
    {
        id: "1",
        text: "hello, this is first tweet!",
    },
    {
        id: "2",
        text: "hello, this is second tweet!",
    },
];

//SDL of GraphQL, Schema Definition Language
const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        fisrtName: String
        lastName: String
    }

    type Tweet {
        id: ID
        text: String
        author: User
    }

    type Query {
        allTweets: [Tweet!]!
        tweet(id: ID!): Tweet
    }

    type Mutation {
        postTweet(text: String, userId: ID): Tweet!
        deleteTweet(id: ID!): Boolean!
    }
`;

const resolvers = {
    Query: {
        allTweets() {
            return Tweets;
        },
        tweet(root, args) {
            console.log(args);
            console.log(args.id);
            return null;
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`running server: ${url}`);
});
