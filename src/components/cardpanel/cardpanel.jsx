import React, { Component } from "react";
import "./card.scss";

type Props = {
  className?: string
};
type State = {
  cardlist: number[],
  selected: number
};

export default class Cardpanel extends Component<Props, State> {
  state = {
    cardlist: [1, 2, 3, 5, 8, 13, 21],
    selected: 0
  };

  handleSelection = (n: number) => () => {
    this.setState({ selected: n });
  };
  isSelected = (n: number) =>
    n === this.state.selected ? "card selected" : "card";

  render() {
    return (
      <div>
        <h1>Select a Card</h1>
        <div className="panel">
          {this.state.cardlist.map(c => (
            <div
              key={c}
              onClick={this.handleSelection(c)}
              className={this.isSelected(c)}
            >
              <p>{c}</p>
            </div>
          ))}
          <div className={this.isSelected(0)}>
            <p>?</p>
          </div>
        </div>
      </div>
    );
  }
}
