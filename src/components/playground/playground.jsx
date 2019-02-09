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
      { value: 1, name: "alma" },
      { value: 2, name: "alma" },
      { value: 3, name: "eseztisztahaszon" },
      { value: 4, name: "alma" },
      { value: 5, name: "allmlfdlkmsfdma" },
      { value: 6, name: "alma" },
      { value: 7, name: "alma" }
    ]
  };
  render() {
    return (
      <div className="mainground">
        {this.state.cardlist.map((c, i) => (
          <div key={i}>
            <div
              className="nametag"
              style={{
                "font-variation-settings": '"wdth"' + (140 - c.name.length * 5),
                fontSize: 20 - c.name.length / 2
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
