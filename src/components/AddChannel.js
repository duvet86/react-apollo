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

  return (
    <div className="form-inline" style={{ "margin-bottom": 15 }}>
      <div className="form-group">
        <label for="newChannel">New Channel</label>
        <input
          id="newChannel"
          type="text"
          className="form-control mx-sm-3"
          placeholder="New channel"
          onKeyUp={handleKeyUp}
        />
      </div>
    </div>
  );
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
