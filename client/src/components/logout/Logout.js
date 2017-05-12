import React from "react";
import PropTypes from "prop-types";
import { Navbar, Button } from "react-bootstrap";

const Logout = ({ handleClick }) => {
  return (
    <Navbar.Form pullRight>
      <Button onClick={handleClick}>Logout</Button>
    </Navbar.Form>
  );
};

Logout.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Logout;
