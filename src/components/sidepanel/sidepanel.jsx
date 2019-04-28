import React, { Component } from 'react';
import './side.scss';
import SocketContext from './../App/socket-context';

type Props = {
  className?: string
};
type State = {
  tasks: number[],
  socket: io.SocketIOClient.Socket
};

export default class Sidepanel extends Component<Props, State> {
  static contextType = SocketContext;
  state = {
    tasks: [1, 2, 3, 4, 5, 6, 7],
    socket: this.context
  };

  handleFlipButtonClick = (state: Boolean) => () => {
    this.state.socket.emit('Flip', state);
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
          <div className="buttons">
            <button onClick={this.handleFlipButtonClick(false)} task="hide">
              HIDE
            </button>
            <button onClick={this.handleFlipButtonClick(true)} task="reveal">
              REVEAL
            </button>
          </div>
        </div>
      </div>
    );
  }
}
