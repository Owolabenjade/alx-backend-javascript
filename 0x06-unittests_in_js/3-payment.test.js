const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with SUM, 100, and 20', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    
    sendPaymentRequestToApi(100, 20);
    
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    
    spy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments for different values', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    
    sendPaymentRequestToApi(50, 15);
    
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 50, 15)).to.be.true;
    
    spy.restore();
  });

  it('should call Utils.calculateNumber exactly once', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    
    sendPaymentRequestToApi(200, 30);
    
    expect(spy.callCount).to.equal(1);
    
    spy.restore();
  });

  it('should verify the math calculation matches direct Utils call', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    
    // Call our function
    sendPaymentRequestToApi(100, 20);
    
    // Verify the spy was called with the same arguments as direct call
    const directResult = Utils.calculateNumber('SUM', 100, 20);
    const spyResult = spy.returnValues[0];
    
    expect(spyResult).to.equal(directResult);
    expect(spyResult).to.equal(120);
    
    spy.restore();
  });

  it('should handle decimal values correctly through Utils', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    
    sendPaymentRequestToApi(10.4, 5.6);
    
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 10.4, 5.6)).to.be.true;
    
    // Verify the calculation is correct (10.4 rounds to 10, 5.6 rounds to 6)
    expect(spy.returnValues[0]).to.equal(16);
    
    spy.restore();
  });
});
