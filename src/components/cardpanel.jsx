import React, { Component } from "react";
import "./card.scss";

type Props = {
  className?: string
};
type State = {
  cardlist: number[]
};

export default class Cardpanel extends Component<Props, State> {
  state = {
    cardlist: [1, 2, 3]
  };

  render() {
    return (
      <div>
        <h1>ez egy kartya</h1>
        {this.state.cardlist.map(c => (
          <div>alma</div>
        ))}
      </div>
    );
  }
}
