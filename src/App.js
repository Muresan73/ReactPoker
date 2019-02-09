import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Cardpanel from "./components/cardpanel/cardpanel";
import Playground from "./components/playground/playground";
import Sidepanel from "./components/sidepanel/sidepanel";

class App extends Component<any, any> {
  render() {
    return (
      <div className="App">
        <div className="playarea">
          <img src={logo} className="App-logo" alt="logo" />
          <Playground />
          <Cardpanel />
        </div>
        <div className="side">
          <Sidepanel />
        </div>
      </div>
    );
  }
}

export default App;
