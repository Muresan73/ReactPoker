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
    socket: io('', { query: { room: '11' } }),
    currentUser: 'Aladár'
  };

  componentDidMount() {
    const socket = this.state.socket;
    const currentUser = this.state.currentUser;

    socket.on('connect', function() {
      console.log('connected!');
      socket.emit('Greet', { message: 'Hello Everyone!', name: currentUser });
    });
    socket.on('broadcast', msg => {
      console.log(msg);
    });
    // socket.on('Greet', name => socket.emit('WellcomeIam', currentUser));
    // socket.on('Greet', name => console.log(name));
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
            <Cardpanel currentUser={this.state.currentUser} />
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
