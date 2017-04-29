import express from "express";
import jwt from "express-jwt";
import cors from "cors";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import { createServer } from "http";
import { SubscriptionServer } from "subscriptions-transport-ws";
import subscriptionManager from "./data/subscriptionManager";
import schema from "./data/schema";

const WEBSOCKET_SERVER_PORT = 8081;
const GRAPHQL_PORT = 8080;

const helperMiddleware = [
  bodyParser.json(),
  jwt({ secret: "secret", credentialsRequired: false })
];

const graphQLServer = express();
graphQLServer.use(cors());

graphQLServer.use(
  "/graphql",
  ...helperMiddleware,
  graphqlExpress(request => {
    console.log(request.user);
    return {
      schema: schema,
      context: { user: request.user }
    };
  })
);

graphQLServer.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql",
    subscriptionsEndpoint: `ws://localhost:${WEBSOCKET_SERVER_PORT}/subscriptions`
  })
);

const websocketServer = createServer(graphQLServer);

websocketServer.listen(WEBSOCKET_SERVER_PORT, () => {
  console.log(
    `GraphQL Subscription Server is now running on http://localhost:${WEBSOCKET_SERVER_PORT}`
  );
  new SubscriptionServer(
    {
      subscriptionManager: subscriptionManager
    },
    {
      server: websocketServer,
      path: "/subscriptions"
    }
  );
});

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
  )
);
