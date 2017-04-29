import "bootstrap/dist/css/bootstrap.css";
import "./css/index.css";

import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { Router } from "react-router";
import { Route, Switch } from "react-router-dom";

import browserHistory from "./lib/browserHistory";
import apolloClient from "./lib/apolloClient";

import App from "./components/App";
import Home from "./components/presentationals/Home";
import LoginContainer from "./components/containers/LoginContainer";
import ChannelsListContainer
  from "./components/containers/ChannelsListContainer";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <App>
          <Route exact path="/" component={Home} />
          <Route path="/channelList" component={ChannelsListContainer} />
        </App>
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
