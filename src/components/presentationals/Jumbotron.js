import React from "react";
import logo from "logo.svg";
import { Grid, Jumbotron, Image } from "react-bootstrap";

const customJumbotron = () => (
  <Jumbotron>
    <Grid>
      <Image src={logo} className="app-logo" />
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
      </p>
      <p />
    </Grid>
  </Jumbotron>
);

export default customJumbotron;
