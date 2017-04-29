import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => (
  <Navbar fixedTop bsStyle="inverse">
    <Navbar.Header>
      <Navbar.Brand>
        <Link className="navbar-brand" to="/">Home</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/channelList">
        <NavItem eventKey={2}>List of Channels</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
);

export default NavBar;
