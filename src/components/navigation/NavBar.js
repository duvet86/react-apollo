import logo from "logo.svg";

import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, FormGroup, FormControl, Image } from "react-bootstrap";

import { topBarRoutes } from "components/routes";
import NavItemLink from "components/core/NavItemLink";

import LogoutContainer from "components/logout/LogoutContainer";

const NavBar = () => (
  <Navbar fluid fixedTop>
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
      </Navbar.Form>
      <LogoutContainer />
      <Nav pullRight>
        {topBarRoutes.map(({ id, path, label }) => (
          <NavItemLink key={id} exact path={path} label={label} />
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
