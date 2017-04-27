import "bootstrap/dist/css/bootstrap.css";
import "./css/index.css";

import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import apolloClient from "./graphQLClient/apolloClient";

import App from "./components/App";
import Home from "./components/presentationals/Home";
import ChannelsListContainer from "./components/containers/ChannelsListContainer";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/channelList" component={ChannelsListContainer} />
        </Switch>
      </App>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
