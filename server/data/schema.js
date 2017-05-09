import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

const typeDefs = `
  enum STATUS {
    OK
    FAIL
  }

  type Result {
    status: STATUS!
    message: String
  }

  type Channel {
    id: ID!
    name: String
  }

  type User {
    id: ID!
    email: String!
    password: String!
    jwtToken: String
  }

  type UserResponse {
    user: User,
    error: String
  }

  type Query {
    channels: [Channel]
    getJwtToken: String
  }

  type Mutation {
    addChannel(name: String!): Channel
    removeChannel(id: ID!): Result
    login(email: String! password: String!): UserResponse
    logout(jwtToken: String!): Result
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
