import React, { Component } from "react";
import "./card.scss";

type Props = {
  className?: string
};
type State = {
  cardlist: string[],
  selected: string
};

export default class Cardpanel extends Component<Props, State> {
  state = {
    cardlist: ["1", "2", "3", "5", "8", "13", "21", "?"],
    selected: "-1"
  };

  handleSelection = (n: string) => () => {
    this.setState({ selected: n });
  };
  isSelected = (n: string) =>
    n === this.state.selected ? "card selected" : "card";

  render() {
    return (
      <div>
        <h1>Select a Card</h1>
        <div className="panel">
          {this.state.cardlist.map(c => (
            <div className="cardHolder">
              <div
                key={c}
                onClick={this.handleSelection(c)}
                className={this.isSelected(c)}
              >
                <svg viewBox="0 0 30 50" width="100%">
                  <text x="15" y="35" text-anchor="middle">
                    {c}
                  </text>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
