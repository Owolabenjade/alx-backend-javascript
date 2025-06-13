const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleLogSpy;

  beforeEach(function() {
    // Create spy for console.log before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore spy after each test
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" and be called once when called with 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);

    // Verify console.log is called with correct message
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
    // Verify console.log is called only once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" and be called once when called with 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);

    // Verify console.log is called with correct message
    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
    // Verify console.log is called only once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});
