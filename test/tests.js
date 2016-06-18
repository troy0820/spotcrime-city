'use strict';

const Code = require('code'); // Hapi assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const scc = require('../lib/spotcrimecity');

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
