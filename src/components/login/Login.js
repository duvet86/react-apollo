import React from "react";
import PropTypes from "prop-types";
import { Button, FormGroup, Checkbox } from "react-bootstrap";

import FieldGroup from "components/core/FieldGroup";

const Login = ({
  handleSubmit,
  handleEmailChange,
  getEmailValidationState,
  getPasswordValidationState,
  handlePasswordChange,
  emailValue,
  passwordValue
}) => (
  <form className="form-signin" onSubmit={handleSubmit}>
    <h2 className="form-signin-heading">Please sign in</h2>
    <FieldGroup
      formGroupClassName="field-group-email"
      id="formControlsEmail"
      type="email"
      label="Email"
      srOnly
      placeholder="Email"
      validationState={getEmailValidationState()}
      value={emailValue}
      onChange={handleEmailChange}
    />
    <FieldGroup
      id="formControlsPassword"
      label="Password"
      srOnly
      type="password"
      placeholder="Password"
      validationState={getPasswordValidationState()}
      value={passwordValue}
      onChange={handlePasswordChange}
    />
    <FormGroup>
      <Checkbox>Remember me</Checkbox>
    </FormGroup>
    <Button bsStyle="primary" bsSize="large" block type="submit">
      Submit
    </Button>
  </form>
);

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  getEmailValidationState: PropTypes.func.isRequired,
  getPasswordValidationState: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired
};

export default Login;
