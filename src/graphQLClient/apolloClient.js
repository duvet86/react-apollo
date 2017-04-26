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

// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

// Finally, create your ApolloClient instance with the modified network interface
export default new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions
});
