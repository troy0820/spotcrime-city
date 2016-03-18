'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const scc = require('./lib/spotcrimecity');

server.connection({
  host: 'localhost',
  port: '8050'
});

server.route([{
  method: 'GET',
  path: '/{city}/{state}',
  handler (req, reply) {
  const city = req.params.city;
  const state = req.params.state;
  const crimes = scc.getCrimesCity(`${city}, ${state}`);
  reply(crimes);
  }
},
{
  method: 'GET',
  path: '/',
  handler (req, reply) {
    reply('Welcome to spotcrime-city');
  }
}]);

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('=> Server is started on port 8050');
});

module.exports = server;
