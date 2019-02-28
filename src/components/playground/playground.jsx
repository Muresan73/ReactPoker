import React, { Component } from "react";
import "./ground.scss";

type Props = {
  className?: string
};
type State = {
  cardlist: { value: number, name: string }[]
};

export default class Playground extends Component<Props, State> {
  state = {
    cardlist: [
      { value: 1, name: "almaaa" },
      { value: 2, name: "almaaaa" },
      { value: 3, name: "eseztiszt" },
      { value: 4, name: "almaasdasd" },
      { value: 5, name: "allmlfdlkmasda" },
      { value: 6, name: "almaasdasdasd" },
      { value: 2, name: "almaaaa" },
      { value: 3, name: "eseztiszt" },
      { value: 4, name: "almaasdasd" },
      { value: 5, name: "allmlfdlkmasda" },
      { value: 6, name: "almaasdasda" },
      { value: 3, name: "eseztiszt" }
    ]
  };

  textMaxWidth = (text: string) => 0.6;
  // Math.pow(Math.max(...text.split(" ").map(s => s.length)), 1.4) / 50;

  render() {
    return (
      <div className="gridContainer">
        <div className="maingroundgrid">
          {this.state.cardlist.map((c, i) => (
            <div key={i}>
              <div className="nametag">
                <svg viewBox="0 0 60 20">
                  <text
                    x="30"
                    y="20"
                    text-anchor="middle"
                    textLength="60"
                    lengthAdjust="spacingAndGlyphs"
                  >
                    {c.name}
                  </text>
                </svg>
              </div>
              <div className="card">
                <svg viewBox="0 0 30 40">
                  <text x="15" y="30" text-anchor="middle">
                    {c.value}
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
