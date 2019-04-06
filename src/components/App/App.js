import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.scss';
import Cardpanel from '../cardpanel/cardpanel';
import Playground from '../playground/playground';
import Sidepanel from '../sidepanel/sidepanel';
import io from 'socket.io-client';
import SocketContext from './socket-context';

type Props = {
  className?: string,
  match: any
};
type State = {
  isSideopen: boolean,
  socket: io.SocketIOClient.Socket
};

class App extends Component<Props, State> {
  state = {
    isSideopen: false,
    socket: io('', { query: { room: '11' } })
  };

  componentDidMount() {
    const socket = this.state.socket;
    socket.on('connect', function() {
      console.log('connected!');
      socket.emit('greet', { message: 'Hello Everyone!' });
    });
    socket.on('broadcast', msg => {
      console.log(msg);
    });
    socket.on('reconnect_attempt', () => {});

    socket.on('greet', info => {
      console.log(info);
    });

    socket.emit('greet', { message: 'Hello Hali!' });
  }
  handleMenuClick = () => {
    this.setState({ isSideopen: !this.state.isSideopen });
  };

  render() {
    return (
      <SocketContext.Provider value={this.state.socket}>
        <div className="App">
          <div className="playarea">
            {this.props.match.params.id}
            <img src={logo} className="App-logo" alt="logo" />
            <Playground />
            <Cardpanel />
          </div>
          <div
            className={this.state.isSideopen ? 'hamburger selectedBurger' : 'hamburger'}
            onClick={this.handleMenuClick}
          >
            <div />
          </div>
          <div className={this.state.isSideopen ? 'side openside' : 'side'}>
            <Sidepanel />
          </div>
        </div>
      </SocketContext.Provider>
    );
  }
}

export default App;
