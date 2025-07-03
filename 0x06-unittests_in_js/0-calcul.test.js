const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when inputs are 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when inputs are 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when inputs are 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle rounding edge cases', function() {
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);
    assert.strictEqual(calculateNumber(1.4, 1.4), 2);
    assert.strictEqual(calculateNumber(1.5, 1.5), 4);
    assert.strictEqual(calculateNumber(2.4, 2.4), 4);
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });

  it('should handle negative numbers', function() {
    assert.strictEqual(calculateNumber(-1, -1), -2);
    assert.strictEqual(calculateNumber(-1.4, -1.4), -2);
    assert.strictEqual(calculateNumber(-1.5, -1.5), -2);
    assert.strictEqual(calculateNumber(-2.4, -2.4), -4);
    assert.strictEqual(calculateNumber(-2.5, -2.5), -4);
  });

  it('should handle mixed positive and negative numbers', function() {
    assert.strictEqual(calculateNumber(1, -1), 0);
    assert.strictEqual(calculateNumber(-1, 1), 0);
    assert.strictEqual(calculateNumber(1.5, -1.5), 0);
    assert.strictEqual(calculateNumber(-1.5, 1.5), 0);
  });

  it('should handle zero values', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 1), 1);
    assert.strictEqual(calculateNumber(1, 0), 1);
    assert.strictEqual(calculateNumber(0.4, 0), 0);
    assert.strictEqual(calculateNumber(0, 0.4), 0);
  });

  it('should handle large numbers', function() {
    assert.strictEqual(calculateNumber(1000.4, 2000.4), 3000);
    assert.strictEqual(calculateNumber(1000.5, 2000.5), 3002);
    assert.strictEqual(calculateNumber(999.9, 1000.1), 2000);
  });

  it('should handle decimal precision edge cases', function() {
    assert.strictEqual(calculateNumber(0.1, 0.1), 0);
    assert.strictEqual(calculateNumber(0.1, 0.4), 0);
    assert.strictEqual(calculateNumber(0.6, 0.6), 2);
    assert.strictEqual(calculateNumber(0.9, 0.9), 2);
  });
});
