const express = require('express');

const server = express();

const users = [
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
  res.json(users);
});

server.get('/api/users/:id', (req, res) => {
  const id = req.params.id;

  const user = users.find(user => user.id == id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({message: 'user not found'});
  }
});

server.post('/api/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(users);
});

module.exports = server;
