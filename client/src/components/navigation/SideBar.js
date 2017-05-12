import React from "react";
import { Col, Nav } from "react-bootstrap";

import { sideBarRoutes } from "components/routes";
import NavItemLink from "components/core/NavItemLink";

const SideBar = () => (
  <Col sm={3} md={2} className="sidebar">
    <Nav className="nav-sidebar">
      {sideBarRoutes.map(({ id, path, label }) => (
        <NavItemLink key={id} exact path={path} label={label} />
      ))}
    </Nav>
  </Col>
);

export default SideBar;
