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
});

describe('/available_payments endpoint', function() {
  const API_URL = 'http://localhost:7865';

  it('should return correct status code', function(done) {
    request.get(`${API_URL}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct payment methods object', function(done) {
    request.get(`${API_URL}/available_payments`, (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

describe('/login endpoint', function() {
  const API_URL = 'http://localhost:7865';

  it('should return correct status code', function(done) {
    const options = {
      url: `${API_URL}/login`,
      method: 'POST',
      json: true,
      body: { userName: 'Betty' }
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct welcome message', function(done) {
    const options = {
      url: `${API_URL}/login`,
      method: 'POST',
      json: true,
      body: { userName: 'Betty' }
    };

    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should handle different usernames', function(done) {
    const options = {
      url: `${API_URL}/login`,
      method: 'POST',
      json: true,
      body: { userName: 'John' }
    };

    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome John');
      done();
    });
  });
});
