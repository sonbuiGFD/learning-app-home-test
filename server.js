const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const cors = require('cors');
const http = require('http');

const app = express();
app.use(favicon(`${__dirname}/build/favicon.ico`));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

// use it before all route definitions
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:8080'] }));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = http.Server(app);
const port = process.env.PORT || 8080;

// const socketServer = new SocketServer(server);
server.listen(port, () => {
  console.log(`Running at port ${[port]}`);
});
