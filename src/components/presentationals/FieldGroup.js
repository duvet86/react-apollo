import React from "react";
import PropTypes from "prop-types";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from "react-bootstrap";

const FieldGroup = ({
  id,
  label,
  srOnly,
  help,
  validationState,
  value,
  type,
  placeholder,
  onChange
}) => (
  <FormGroup controlId={id} validationState={validationState}>
    <ControlLabel srOnly={srOnly}>{label}</ControlLabel>
    <FormControl
      type={type}
      value={value}
      placeholder="Enter text"
      onChange={onChange}
    />
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
);

FieldGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  srOnly: PropTypes.bool,
  help: PropTypes.string,
  validationState: PropTypes.oneOf(["success", "warning", "error"]),
  type: PropTypes.oneOf(["text", "number", "email", "password"]).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string
};

export default FieldGroup;
