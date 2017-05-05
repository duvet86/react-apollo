import React from "react";
import { Col, Nav, NavItem } from "react-bootstrap";

const SideBar = () => (
  <Col sm={3} md={2} className="sidebar">
    <Nav className="nav-sidebar" activeKey={2}>
      <NavItem eventKey={1}>NavItem 1 content</NavItem>
      <NavItem eventKey={2}>NavItem 2 content</NavItem>
      <NavItem eventKey={3}>NavItem 3 content</NavItem>
    </Nav>
  </Col>
);

export default SideBar;
