'use strict';

const spotcrime = require('spotcrime');
const Promise = require('bluebird');
const geocode = require('geocoder');
const Hapi = require('hapi');
const server = new Hapi.Server();

module.exports = function() {

  this.server.connection({
  host: 'localhost',
  port: '8050'
});

Promise.promisifyAll(geocode);

this.server.route([{
  method: 'GET',
  path: '/{city}/{state}',
  handler: function(req, reply) {
  const city = req.params.city;
  const state = req.params.state;
  geocode.geocodeAsync(`${city}, ${state}`)
  .then(function(data) {
  const loc = {
      lat: Number(data.results[0].geometry.location.lat),
      lon: Number(data.results[0].geometry.location.lng)
    };
    const radius = 0.07;
    spotcrime.getCrimes(loc, radius, function(err, crimes){
      reply(crimes);
      })
    });
  }
},
{
  method:'GET',
  path: '/',
  handler: function(req, reply){
    reply('Welcome to spotcrime-city');
  }
}]);

this.server.start(function(err) {
  if (err) {
    throw err;
  }
  console.log('=> Server is started on port 8050');
  });

  return {
    start: this.server.start(),
  };
}
