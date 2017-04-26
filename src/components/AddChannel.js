import React from "react";
import { gql, graphql } from "react-apollo";

const AddChannel = ({ mutate }) => {
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

  return <input type="text" placeholder="New channel" onKeyUp={handleKeyUp} />;
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
)(AddChannel);
