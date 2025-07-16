const request = require('request');
const { expect } = require('chai');

describe('Index page', function() {
  const API_URL = 'http://localhost:7865';

  it('should return correct status code', function(done) {
    request.get(API_URL, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct message', function(done) {
    request.get(API_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return correct content type', function(done) {
    request.get(API_URL, (error, response, body) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });
});
