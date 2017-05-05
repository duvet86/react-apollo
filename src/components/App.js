import "css/app.css";

import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";
import NavBar from "components/presentationals/NavBar";
import SideBar from "components/presentationals/SideBar";

const App = ({ children }) => (
  <div>
    <NavBar />
    <Grid fluid>
      <Row>
        <SideBar />
        <Col sm={9} smOffset={3} md={10} mdOffset={2} className="main">
          {children}
        </Col>
      </Row>
    </Grid>
  </div>
);

App.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default App;
