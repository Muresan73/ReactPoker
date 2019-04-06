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

  handleButtonClick = (text: string) => () => {
    this.state.socket.emit('greet', { message: text });
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

          <button onClick={this.handleButtonClick('helokanyaloka')}>habala</button>
        </div>
      </div>
    );
  }
}
