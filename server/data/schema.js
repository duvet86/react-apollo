import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

const typeDefs = `
  type Channel {
    id: ID!
    name: String
  }

  type Query {
    channels: [Channel]
  }

  type Mutation {
    addChannel(name: String!): Channel
    removeChannel(id: ID!): String
  }

  type Subscription {
    channelAdded: Channel
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

export default makeExecutableSchema({ typeDefs, resolvers });
