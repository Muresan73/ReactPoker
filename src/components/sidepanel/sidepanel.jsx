import React, { Component } from "react";
import "./side.scss";

type Props = {
  className?: string
};
type State = {
  tasks: number[]
};

export default class Sidepanel extends Component<Props, State> {
  state = {
    tasks: [1, 2, 3, 4, 5, 6, 7]
  };
  render() {
    return (
      <div className="main">
        <div className="tasks">
          <h1>Tasks:</h1>
          {this.state.tasks.map(t => (
            <ul key={t}>
              <li>{t}</li>
            </ul>
          ))}
        </div>
        <div className="controls">
          <h1>Controls:</h1>

          <button>habala</button>
        </div>
      </div>
    );
  }
}
