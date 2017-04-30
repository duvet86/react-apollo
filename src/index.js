import "bootstrap/dist/css/bootstrap.css";
import "./css/index.css";

import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { Router } from "react-router";
import { Switch } from "react-router-dom";

import browserHistory from "./lib/browserHistory";
import apolloClient from "./lib/apolloClient";
import { AuthenticatedRoute, CustomRoute } from "./components/routes";

import App from "./components/App";
import Home from "./components/presentationals/Home";
import LoginContainer from "./components/containers/LoginContainer";
import ChannelsListContainer
  from "./components/containers/ChannelsListContainer";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Router history={browserHistory}>
      <Switch>
        <CustomRoute exact path="/login" component={LoginContainer} />
        <App>
          <AuthenticatedRoute exact path="/" component={Home} />
          <AuthenticatedRoute path="/channelList" component={ChannelsListContainer} />
        </App>
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
