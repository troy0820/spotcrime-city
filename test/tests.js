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

  lab.test('Test to make sure module is not a function but an object', function(done) {
    Code.expect(scc).to.not.be.a.function();
    done();
  });
});

lab.experiment('Test to check server functionality', function() {
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

  lab.test('Check to see if any `${city}/${state}/` route to return 200 (catchAll)', function(done) {
    const options = {
      method: 'GET',
      url: '/Baltimore/MD/'
    };
    server.inject(options, function(response) {
      Code.expect(response.statusCode).to.equal(200);
    });
    done();
  });

  lab.test('Check to see if any route falls into the catchAll route', function(done) {
    const options = {
      method: 'GET',
      url: '/afdfaf/afdfafd/afdfa/dfaf/afdaf/adfaf'
    };
    server.inject(options, function(res) {
      Code.expect(res.statusCode).to.equal(200);
    });
    done();
  });
});

  lab.experiment('Check the function functionality', function() {
    lab.test('Check to see if object returns from function', function(done) {
      const results = scc.getCrimesCity('Baltimore, MD');
      Code.expect(results).to.be.a.object();
      done();
    });
});
