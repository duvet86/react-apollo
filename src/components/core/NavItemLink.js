import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { NavItem } from "react-bootstrap";

const NavItemLink = ({ path, label, ...props }) => (
  <LinkContainer {...props} to={path}>
    <NavItem>{label}</NavItem>
  </LinkContainer>
);

export default NavItemLink;
