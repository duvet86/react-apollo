import "css/App.css";

import React from "react";
import PropTypes from "prop-types";
import { Grid } from "react-bootstrap";
import NavBar from "components/presentationals/NavBar";
import Jumbotron from "components/presentationals/Jumbotron";

const App = ({ children }) => (
  <div>
    <NavBar />
    <Jumbotron />
    <Grid>
      {children}
    </Grid>
  </div>
);

App.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default App;
