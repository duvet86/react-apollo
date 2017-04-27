import "../css/App.css";

import React from "react";
import PropTypes from "prop-types";
import NavBar from "./presentationals/NavBar";
import Jumbotron from "./presentationals/Jumbotron";

const App = ({ children }) => (
  <div>
    <NavBar />
    <Jumbotron />
    <div className="container">
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
