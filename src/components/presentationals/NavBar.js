import logo from "logo.svg";

import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavItem,
  FormGroup,
  FormControl,
  Button,
  Image
} from "react-bootstrap";

import LogoutContainer from "components/containers/LogoutContainer";

const NavBar = () => (
  <Navbar fluid fixedTop bsStyle="inverse">
    <Navbar.Header>
      <Navbar.Brand>
        <Link className="navbar-brand" to="/">
          <Image src={logo} className="app-logo" responsive />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        {" "}
        <Button type="submit">Submit</Button>
      </Navbar.Form>
      <LogoutContainer />
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Settings</NavItem>
        <NavItem eventKey={2} href="#">Profile</NavItem>
        <NavItem eventKey={3} href="#">Help</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
