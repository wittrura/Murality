const expect = require('chai').expect;
process.env.NODE_ENV = 'test';
process.env.PORT = 3000;

const server = require('../server.js');
const request = require('supertest')(server);
const knex = require('../db/knex');

// beforeEach(function(done) {
//   knex.migrate.rollback().then(() => {
//       knex.migrate.latest().then(() => {
//         return knex.seed.run().then(() => {
//           done();
//         });
//       });
//     });
// });

describe("express works", function() {
  it('returns true when working', function() {
    expect(true).to.be.true;
  });
});

describe("neighborhood", function () {
  it('should return all neighborhoods', function() {
    expect().to.
  })
})
