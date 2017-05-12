import "bootstrap/dist/css/bootstrap.css";
import "css/index.css";

import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { Router } from "react-router";
import { Switch } from "react-router-dom";

import browserHistory from "lib/browserHistory";
import apolloClient from "lib/apolloClient";

import routes from "components/routes";
import {
  AuthenticatedRoute,
  CustomRoute
} from "components/routes/CustomRoutes";
import App from "components/App";

import LoginContainer from "components/login/LoginContainer";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Router history={browserHistory}>
      <Switch>
        <CustomRoute exact path="/login" component={LoginContainer} />
        <App>
          {routes.map(({ id, path, component }) => (
            <AuthenticatedRoute
              key={id}
              exact
              path={path}
              component={component}
            />
          ))}
        </App>
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
