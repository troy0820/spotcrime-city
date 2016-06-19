'use strict';

const Code = require('code'); // Hapi assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const scc = require('../lib/spotcrimecity');
const server = require('../server');

lab.experiment('Set up tests', function() {
  lab.test('Test to see if module exported object', function(done) {
    Code.expect(scc).to.be.a.object();
    done();
  });

  lab.test('Test to see if object has function `getCrimesCity`', function(done) {
    Code.expect(scc.getCrimesCity).to.be.a.function();
    done();
  });

  lab.test('Test to see if object function is not an object', function(done) {
    Code.expect(scc.getCrimesCity).to.not.be.an.object();
    done();
  });
});

lab.experiment('Test to check functionality', function() {
  lab.test('Check to see if `/` route passes', function(done) {
    const options = {
      method: 'GET',
      url: '/'
    };
    server.inject(options, function(response) {
      Code.expect(response.statusCode).to.equal(200);
      Code.expect(response.payload).to.be.a.string();
    });
    done();
  });

  lab.test('Check to see if any other route passes', function(done) {
    const options = {
      method: 'GET',
      url: '/Baltimore/MD'
    };
    server.inject(options, function(response) {
      Code.expect(response.statusCode).to.equal(200);
    });
    done();
  });

  lab.test('Check to see if any `${city}/${state}/` route fails', function(done) {
    const options = {
      method: 'GET',
      url: '/Baltimore/MD/'
    };
    server.inject(options, function(response) {
      Code.expect(response.statusCode).to.equal(404);
    });
    done();
  });
});
