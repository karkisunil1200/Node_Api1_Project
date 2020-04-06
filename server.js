const express = require('express');

const server = express();

const hubs = [
  {
    id: 1,
    name: 'Jane Doe',
    bio: "Not Tarzan's Wife, another Jane"
  }
];

server.use(express.json());

server.get('/', (req, res) => {
  res.send({server: 'running....'});
});

server.get('/api/users', (req, res) => {
  res.json(hubs);
});

server.post('/api/users', (req, res) => {
  const user = req.body;
  hubs.push(user);
  res.status(201).json(hubs);
});

module.exports = server;
