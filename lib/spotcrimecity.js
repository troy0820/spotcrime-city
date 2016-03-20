'use strict';

const spotcrime = require('spotcrime');
const Promise = require('bluebird');
const geocode = require('geocoder');

Promise.promisifyAll(geocode);

const scc = module.exports =  {
  getCrimesCity(city, state) {
    return new Promise((resolve, reject) => {
      geocode.geocodeAsync(`${city}, ${state}`)
      .then((data) => {
    const loc = {
        lat: Number(data.results[0].geometry.location.lat),
        lon: Number(data.results[0].geometry.location.lng)
      };
      console.log('loc', loc);
      const radius = 0.05;
        spotcrime.getCrimes(loc, radius, (err, crime) => {
        resolve(crime);
        });
      }).catch(function(err) {
        reject(err);
      });
    });
  }
};
