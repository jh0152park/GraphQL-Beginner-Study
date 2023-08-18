import { ApolloServer, gql } from "apollo-server";

const Tweets = [
    {
        id: "1",
        text: "hello, this is first tweet!",
        userId: "2",
    },
    {
        id: "2",
        text: "hello, this is second tweet!",
        userId: "1",
    },
];

const Users = [
    {
        id: "1",
        fisrtName: "nico",
        lastName: "las",
    },
    {
        id: "2",
        fisrtName: "elon",
        lastName: "musk",
    },
];

//SDL of GraphQL, Schema Definition Language
const typeDefs = gql`
    type User {
        id: ID!
        fisrtName: String!
        lastName: String!
        fullName: String!
    }

    type Tweet {
        id: ID
        text: String
        author: User
    }

    type Query {
        allUsers: [User!]!
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
        allUsers() {
            console.log("called allUsers");
            return Users;
        },
    },
    Mutation: {
        postTweet(_, { text, userId }) {
            const newTweet = {
                id: Tweets.length + 1,
                text: text,
                userId: userId,
            };
            Tweets.push(newTweet);
            return newTweet;
        },
    },
    User: {
        fullName({ fisrtName, lastName }) {
            return `${fisrtName} ${lastName}`;
        },
    },
    Tweet: {
        author({ userId }) {
            return Users.find((user) => user.id === userId);
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`running server: ${url}`);
});
