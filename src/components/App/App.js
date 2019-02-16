import React, { Component } from "react";
import logo from "../../logo.svg";
import "./App.scss";
import Cardpanel from "../cardpanel/cardpanel";
import Playground from "../playground/playground";
import Sidepanel from "../sidepanel/sidepanel";

type Props = {
  className?: string,
  match: any
};
type State = {
  isSideopen: boolean
};

class App extends Component<Props, State> {
  state = {
    isSideopen: false
  };

  handleMenuClick = () => {
    this.setState({ isSideopen: !this.state.isSideopen });
  };

  render() {
    return (
      <div className="App">
        <div className="playarea">
          {this.props.match.params.id}
          <img src={logo} className="App-logo" alt="logo" />
          <Playground />
          <Cardpanel />
        </div>
        <div
          className={
            this.state.isSideopen ? "hamburger selectedBurger" : "hamburger"
          }
          onClick={this.handleMenuClick}
        >
          <div />
        </div>
        <div className={this.state.isSideopen ? "side openside" : "side"}>
          <Sidepanel />
        </div>
      </div>
    );
  }
}

export default App;
