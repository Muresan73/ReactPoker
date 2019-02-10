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
      { value: 6, name: "almaasdasdasdasdasd" },
      { value: 7, name: "Kemeny Ferenc" }
    ]
  };

  textMaxWidth = (text: string) =>
    Math.pow(Math.max(...text.split(" ").map(s => s.length)), 1.4) / 50;

  render() {
    return (
      <div className="mainground">
        {this.state.cardlist.map((c, i) => (
          <div key={i}>
            <div
              className="nametag"
              style={{
                "font-variation-settings": '"wdth"' + (140 - c.name.length * 5),
                fontSize: 2.5 - this.textMaxWidth(c.name) + "vw"
              }}
            >
              {c.name}
            </div>
            <div className="card">
              <p>{c.value}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
