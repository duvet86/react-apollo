import "css/login.css";

import React, { Component } from "react";
import PropTypes from "prop-types";
import { gql, graphql } from "react-apollo";

import browserHistory from "lib/browserHistory";
import Login from "components/login/Login";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    };
  }

  componentWillMount() {
    document.body.style.paddingTop = "40px";
    document.body.style.paddingBottom = "40px";
    document.body.style.backgroundColor = "#eee";
  }

  componentWillUnmount() {
    document.body.style.paddingTop = null;
    document.body.style.paddingBottom = null;
    document.body.style.backgroundColor = null;
  }

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
        errorMessage={this.state.errorMessage}
      />
    );
  }

  getEmailValidationState = () => {
    if (this.state.errorMessage) return "error";
    const length = this.state.email.length;
    if (length > 8) return "success";
    else if (length > 0) return "error";
  };

  getPasswordValidationState = () => {
    if (this.state.errorMessage) return "error";
    const length = this.state.password.length;
    if (length > 3) return "success";
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
        const { login } = data;
        if (login.error) {
          this.setState({ errorMessage: login.error });
        } else {
          const { user } = login;
          localStorage.setItem("jwt_token", user.jwtToken);
          browserHistory.push("/");
        }
      });
  };
}

LoginContainer.propTypes = {
  mutate: PropTypes.func.isRequired
};

export default graphql(
  gql`
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        user {
          jwtToken
          email
        }
        error
      }
    }
  `
)(LoginContainer);
