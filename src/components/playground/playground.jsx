import React, { useEffect, useContext, useState } from 'react';
import './ground.scss';
import SocketContext from './../App/socket-context';
import axios from 'axios';

type Props = {
  className?: string,
  room: String,
  currentUser: String
};

export default function Playground(props: Props) {
  const [playerList, setplayerList] = useState([
    { value: '1', name: 'almaaa' },
    { value: '2', name: 'almaaaa' },
    { value: '3', name: 'eseztiszt' },
    { value: '4', name: 'almaasdasd' },
    { value: '5', name: 'allmlfdlkmasda' },
    { value: '9', name: 'almaasdas Xassddasd' },
    { value: '2', name: 'almaaaa' },
    { value: '3', name: 'eseztiszt' },
    { value: '4', name: 'almaasdasd' },
    { value: 'PASS', name: 'allmlfdlkmasda' },
    { value: '6', name: 'almaasdasda' },
    { value: '3', name: 'asds' }
  ]);
  const [isFlip, setFlipState] = useState(false);

  const socket = useContext(SocketContext);

  useEffect(() => {
    const addUser = (msg: { message: String, name: String }) =>
      setplayerList(pl => (!pl.map(p => p.name).includes(msg.name) ? pl.concat([{ name: msg.name, value: '0' }]) : pl));
    socket.on('Greet', addUser);
    // socket.on('WellcomeIam', addUser);
    // socket.on('WellcomeIam', m => console.log(m));
    // socket.on('bye', name => setplayerList(playerList.filter(player => player.name !== name)));

    socket.on('cardSelected', (msg: { User: String, Card: String }) => {
      setplayerList(players =>
        players.map(p => p.name).includes(msg.User)
          ? players.map(({ value, name }) => (name === msg.User ? { name, value: msg.Card } : { name, value }))
          : players.concat([{ name: msg.User, value: msg.Card }])
      );
    });

    const mergeNewPlayers = userList =>
      setplayerList(players => {
        console.log(userList);
        return players.concat(
          userList.filter(user => !players.includes(user)).map(user => ({ name: user, value: '0' }))
        );
      });
    socket.on('usrlist', (userList: string[]) => {
      console.log(userList);
      mergeNewPlayers(userList);
    });
    socket.on('Flip', flipstate => setFlipState(flipstate));
    axios
      .get('/currentPlayers', {
        params: {
          room: props.room
        }
      })
      .then(res => {
        const userList = res.data.filter(u => u !== props.currentUser);

        mergeNewPlayers(userList);
      });
  }, []);

  // const textMaxWidth = (text: string) => 0.6;
  // Math.pow(Math.max(...text.split(" ").map(s => s.length)), 1.4) / 50;

  return (
    <div className="gridContainer">
      <div className="maingroundgrid">
        {playerList.map((c, i) => (
          <div key={i}>
            <div className="nametag">
              {c.name.split(/\s+/g).map((text, i) => (
                <svg viewBox="0 0 60 20" key={i}>
                  <text x="30" y="20" textAnchor="middle" textLength="60" lengthAdjust="spacingAndGlyphs" fontSize="20">
                    {text}
                  </text>
                </svg>
              ))}
            </div>
            <div className="card">
              <svg viewBox="0 0 30 40">
                <text
                  x="15"
                  y="30"
                  textAnchor="middle"
                  textLength="30"
                  lengthAdjust={c.value.length < 3 ? 'spacing' : 'spacingAndGlyphs'}
                >
                  {isFlip && c.value}
                </text>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
