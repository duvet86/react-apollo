import React, { Component } from "react";
import PropTypes from "prop-types";
import { gql, graphql } from "react-apollo";

import browserHistory from "lib/browserHistory";
import Login from "components/presentationals/Login";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  getEmailValidationState = () => {
    const length = this.state.email.length;
    if (length > 8) return "success";
    else if (length > 0) return "error";
  };

  getPasswordValidationState = () => {
    const length = this.state.password.length;
    if (length > 6) return "success";
    else if (length > 0) return "error";
  };

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const email = this.state.email.trim();
    const password = this.state.password.trim();
    if (!email || !password) {
      return;
    }

    this.props
      .mutate({
        variables: {
          email,
          password
        }
      })
      .then(({ data }) => {
        localStorage.setItem("jwt_token", data.login.jwtToken);
        browserHistory.push("/");
      });
  };

  render() {
    return (
      <Login
        handleSubmit={this.handleSubmit}
        getEmailValidationState={this.getEmailValidationState}
        getPasswordValidationState={this.getPasswordValidationState}
        handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange}
        emailValue={this.state.email}
        passwordValue={this.state.password}
      />
    );
  }
}

LoginContainer.propTypes = {
  mutate: PropTypes.func.isRequired
};

export default graphql(
  gql`
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        jwtToken
        email
      }
    }
  `
)(LoginContainer);
