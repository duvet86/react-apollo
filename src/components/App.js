import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "../css/App.css";

const App = props => (
  <div>
    <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Link className="navbar-brand" to="/">Home</Link>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/channelList">List of Channels</Link>
          </li>
        </ul>
      </div>
    </nav>
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

    <div className="container">
      <div className="row">
        <div className="col">
          {props.children}
        </div>
      </div>
    </div>

  </div>
);

export default App;
