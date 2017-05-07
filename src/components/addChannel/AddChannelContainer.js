import React from "react";
import PropTypes from "prop-types";
import { gql, graphql } from "react-apollo";

import AddChannel from "components/addChannel/AddChannel";

const AddChannelContainer = ({ mutate }) => {
  const handleKeyUp = evt => {
    if (evt.keyCode === 13) {
      evt.persist();
      mutate({
        variables: { name: evt.target.value }
      }).then(res => {
        evt.target.value = "";
      });
    }
  };

  return (
    <AddChannel handleKeyUp={handleKeyUp} />
  );
};

AddChannelContainer.propTypes = {
  mutate: PropTypes.func.isRequired
};

export default graphql(
  gql`
    mutation addChannel($name: String!) {
      addChannel(name: $name) {
        id
        name
      }
    }
  `
)(AddChannelContainer);
