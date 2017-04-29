import { ApolloClient, createNetworkInterface } from "react-apollo";
import {
  SubscriptionClient,
  addGraphQLSubscriptions
} from "subscriptions-transport-ws";

const wsClient = new SubscriptionClient("ws://localhost:8081/subscriptions", {
  reconnect: true
});

const networkInterface = createNetworkInterface({
  uri: "http://localhost:8080/graphql"
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}; // Create the header object if needed.
      }

      // get the authentication token from local storage if it exists
      const token = localStorage.getItem("jwt_token");
      req.options.headers.authorization = token ? `Bearer ${token}` : null;
      next();
    }
  }
]);

// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

// Finally, create your ApolloClient instance with the modified network interface
export default new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions
});
