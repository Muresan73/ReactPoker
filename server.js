const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/ping', function(req, res) {
  console.log('lenni');

  return res.send('pong');
});

app.get('/session', function(req, res) {
  res.send('dikk');
});

app.get('/', function(req, res) {
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

    socket.on('cardSelected', message => {
      console.log(message);
      socket.to(room).emit('cardSelected', message);
    });

    socket.on('disconnect', () => {
      console.log(client.name + ' disconnected');
      socket.to(room).emit('bye', client.name);
    });
  });
  socket.emit('WellcomeIam', name => socket.to(room).emit('WellcomeIam', name));

  // socket.on('disconnect', () => {
  //   console.log('user disconnected');
  // });
});

server.listen(process.env.PORT || 8080);
console.log('Running on ' + (process.env.PORT || 8080));
