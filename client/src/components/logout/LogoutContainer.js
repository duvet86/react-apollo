import React from "react";
import PropTypes from "prop-types";
import { gql, graphql } from "react-apollo";

import browserHistory from "lib/browserHistory";
import Logout from "components/logout/Logout";

const LogoutContainer = ({ mutate }) => {
  const handleLogout = () => {
    const jwtToken = localStorage.getItem("jwt_token");
    console.log(jwtToken);
    mutate({
      variables: { jwtToken }
    }).then(res => {
      localStorage.removeItem("jwt_token");
      browserHistory.push("/login");
    })
    .catch(err => console.log(err));
  };

  return <Logout handleClick={handleLogout} />;
};

LogoutContainer.propTypes = {
  mutate: PropTypes.func.isRequired
};

export default graphql(
  gql`
    mutation logout($jwtToken: String!) {
      logout(jwtToken: $jwtToken) {
        status
        message
      }
    }
  `
)(LogoutContainer);
