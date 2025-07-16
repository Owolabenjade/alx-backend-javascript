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
});

describe('Cart page', function() {
  const API_URL = 'http://localhost:7865';

  it('should return correct status code when :id is a number', function(done) {
    request.get(`${API_URL}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct message when :id is a number', function(done) {
    request.get(`${API_URL}/cart/12`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 status code when :id is NOT a number', function(done) {
    request.get(`${API_URL}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return 404 for negative numbers', function(done) {
    request.get(`${API_URL}/cart/-12`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
