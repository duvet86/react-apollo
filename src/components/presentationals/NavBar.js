import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
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
);

export default NavBar;
