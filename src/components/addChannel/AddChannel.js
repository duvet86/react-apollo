import React from "react";
import PropTypes from "prop-types";
import {
  Col,
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

const AddChannel = ({ handleKeyUp }) => {
  return (
    <Form
      horizontal
      onSubmit={evt => {
        evt.preventDefault();
      }}
    >
      <FormGroup>
        <Col componentClass={ControlLabel} md={2}>
          Add New Channel
        </Col>
        <Col md={10}>
          <FormControl
            type="text"
            placeholder="New channel"
            onKeyUp={handleKeyUp}
          />
        </Col>
      </FormGroup>
    </Form>
  );
};

AddChannel.propTypes = {
  handleKeyUp: PropTypes.func.isRequired
};

export default AddChannel;
