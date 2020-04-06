const express = require('express');

const server = express();

server.use(express());

const hubs = [
  {
    id: Date.now(), // hint: use the shortid npm package to generate it
    name: 'Jane Doe', // String, required
    bio: "Not Tarzan's Wife, another Jane" // String, required
  }
];

server.get('/', (req, res) => {
  res.send({server: 'running....'});
});

module.exports = server;
