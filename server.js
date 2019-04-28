const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

const server = require('http').Server(app);
const io = require('socket.io')(server);

const store = {
  rooms: {},
  addUser2Room: (username, room) =>
    store.rooms[room] ? store.rooms[room].add(username) : (store.rooms[room] = new Set([username])),
  removeUserFromRoom: (username, room) =>
    store.rooms[room].length > 1 ? store.rooms[room].delete(username) : delete store.rooms[room]
};

app.get('/ping', function(req, res) {
  console.log('lenni');

  return res.send('pong');
});

app.get('/session', function(req, res) {
  res.send('dikk');
});

app.get('/currentPlayers', function(req, res) {
  const room = req.query.room;
  res.send(Array.from(store.rooms[room]));
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

io.on('connection', socket => {
  const room = socket.handshake.query.room;
  socket.join(room);
  console.log('connected to room:' + room);

  console.log('User connected');
  socket.broadcast.emit('broadcast', 'somebody joined the connection');

  socket.on('Greet', (client, id) => {
    socket.to(room).emit('Greet', client);

    if (store.rooms[room]) {
      console.log(Array.from(store.rooms[room]));
      // socket.emit('CurrentPlayersInRoom', Array.from(store.rooms[room]));
      // socket.emit('usrlist', Array.from(store.rooms[room]));
    }
    store.addUser2Room(client.name, room);

    socket.on('cardSelected', message => {
      console.log(message);
      socket.to(room).emit('cardSelected', message);
    });

    socket.on('disconnect', () => {
      console.log(client.name + ' disconnected');
      socket.to(room).emit('bye', client.name);
      // store.removeUserFromRoom(client.name, room);
      console.log(store.rooms);
    });
  });
  // socket.on('WellcomeIam', name => socket.to(room).emit('WellcomeIam', name));
  socket.on('Flip', state => {
    console.log(state);
    console.log(room);

    io.in(room).emit('Flip', state);
  });

  // socket.on('disconnect', () => {
  //   console.log('user disconnected');
  // });
});

server.listen(process.env.PORT || 8080);
console.log('Running on ' + (process.env.PORT || 8080));
