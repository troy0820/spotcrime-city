'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const scc = require('./lib/spotcrimecity');
const Blipp = require('blipp');

server.connection({
  host: '0.0.0.0',
  port: '8050'
});

server.route([{
  method: 'GET',
  path: '/{city}/{state}',
  config: {
  description: 'City State Route for SpotCrime City',
  handler (req, reply) {
  const city = req.params.city;
  const state = req.params.state;
  const crimes = scc.getCrimesCity(`${city}, ${state}`);
    reply(crimes);
  }
  }
},
{
  method: 'GET',
  path: '/',
  config: {
  description: 'Welcome to SpotCrime City Route',
  handler (req, reply) {
    reply('Welcome to spotcrime-city');
    }
  }
},
{
  method: 'GET',
  path: '/{p*}',
  config: {
  description: 'Catch all route',
  handler (req, reply) {
    reply('Sorry........ You have reached the wrong page');
  }
}
}]);

server.register({ register: Blipp, options: {} });
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('=> Server is started on port 8050');
});

module.exports = server;
