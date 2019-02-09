import React, { Component } from "react";
import "./ground.scss";

type Props = {
  className?: string
};
type State = {
  cardlist: number[]
};

export default class Playground extends Component<Props, State> {
  state = {
    cardlist: [1, 2, 3, 4, 5, 6, 7]
  };
  render() {
    return (
      <div className="mainground">
        {this.state.cardlist.map(c => (
          <div key={c} className="card">
            <p>{c}</p>
          </div>
        ))}
      </div>
    );
  }
}
