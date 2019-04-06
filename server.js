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
  socket.join(socket.handshake.query.room);
  console.log('connected to room:' + socket.handshake.query.room);

  console.log('User connected');
  socket.broadcast.emit('broadcast', 'somebody joined the connection');

  socket.on('greet', client => {
    socket.to('11').emit('greet', client);
    console.log(client);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(process.env.PORT || 8080);
console.log('Running on ' + (process.env.PORT || 8080));
