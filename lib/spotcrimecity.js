'use strict';

const spotcrime = require('spotcrime');
const Promise = require('bluebird');
const geocode = require('geocoder');
const _ = require('lodash');

Promise.promisifyAll(geocode);

const scc = module.exports = {
  getCrimesCity(city, state) {
    return new Promise((resolve, reject) => {
      geocode.geocodeAsync(`${city}, ${state}`)
        .then((data) => {
          const loc = {
            lat: Number(data.results[0].geometry.location.lat),
            lon: Number(data.results[0].geometry.location.lng)
          };
          const radius = 0.05;
          spotcrime.getCrimes(loc, radius, (err, crime) => {
            if (err || _.isEmpty(crime)) {
              resolve('Nothing to see here.....Check api key');
            } else {
              resolve(crime);
            }
          });
        }).catch((err) => {
          reject(err);
      });
    });
  }
};
