const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(function() {
    // Create stub for Utils.calculateNumber to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Create spy for console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore both stub and spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, and 20 and log correct message', function() {
    sendPaymentRequestToApi(100, 20);

    // Verify stub is called with correct arguments
    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    
    // Verify console.log is called with correct message
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
  });
});
