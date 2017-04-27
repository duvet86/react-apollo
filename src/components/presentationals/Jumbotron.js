import React from "react";
import logo from "../../logo.svg";

const Jumbotron = () => (
      <div className="jumbotron">
      <div className="container">
        <div className="media">
          <img
            src={logo}
            className="app-logo d-flex align-self-center mr-3"
            alt="logo"
          />
          <div className="media-body">
            <h1 className="display-3">Welcome to React App</h1>
            <p>
              This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.
            </p>
          </div>
        </div>
      </div>
    </div>
);

export default Jumbotron;
