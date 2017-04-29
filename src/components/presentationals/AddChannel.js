import React from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const AddChannel = ({ handleKeyUp }) => {
  return (
    <Form
      inline
      onSubmit={evt => {
        evt.preventDefault();
      }}
    >
      <FormGroup controlId="formInlineName">
        <ControlLabel>New Channel</ControlLabel>
        <FormControl
          type="text"
          placeholder="New channel"
          onKeyUp={handleKeyUp}
        />
      </FormGroup>
    </Form>
  );
};

AddChannel.propTypes = {
  handleKeyUp: PropTypes.func.isRequired
};

export default AddChannel;
