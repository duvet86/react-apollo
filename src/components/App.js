import React from "react";
import logo from "../logo.svg";
import "../css/App.css";

import ChannelsList from "./ChannelsList";

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to Apollo</h2>
    </div>
    <ChannelsList />
  </div>
);

export default App;
