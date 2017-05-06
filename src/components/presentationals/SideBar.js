import React from "react";
import { Col, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const SideBar = () => (
  <Col sm={3} md={2} className="sidebar">
    <Nav className="nav-sidebar">
      <LinkContainer exact to="/">
        <NavItem>DashBoard</NavItem>
      </LinkContainer>
      <LinkContainer exact to="/sortable">
        <NavItem>Sortable List</NavItem>
      </LinkContainer>
      <LinkContainer exact to="/pagebuilder">
        <NavItem>Page Builder</NavItem>
      </LinkContainer>
    </Nav>
  </Col>
);

export default SideBar;
