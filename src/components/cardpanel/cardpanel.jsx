import React, { Component } from 'react';
import './card.scss';
import SocketContext from './../App/socket-context';

type Props = {
  className?: string
};
type State = {
  cardlist: string[],
  selected: string,
  socket: io.SocketIOClient.Socket
};

export default class Cardpanel extends Component<Props, State> {
  static contextType = SocketContext;
  state = {
    cardlist: ['1', '2', '3', '5', '8', '13', '21', '?', 'PASS'],
    selected: '-1',
    socket: this.context
  };
  componentDidMount() {
    const socket = this.state.socket;
    socket.emit('greet', { message: 'Hello, I am cardpanel!' });
  }

  handleSelection = (n: string) => () => {
    this.setState({ selected: n });
  };
  isSelected = (n: string) => (n === this.state.selected ? 'card selected' : 'card');

  render() {
    return (
      <div>
        <h1>Select a Card</h1>
        <div className="panel">
          {this.state.cardlist.map((c, i) => (
            <div key={i} className="cardHolder">
              <div onClick={this.handleSelection(c)} className={this.isSelected(c)}>
                <svg viewBox="0 0 30 50" width="100%">
                  <text
                    x="15"
                    y="35"
                    textAnchor="middle"
                    textLength={c.length < 3 ? '0' : '30'}
                    lengthAdjust="spacingAndGlyphs"
                  >
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
