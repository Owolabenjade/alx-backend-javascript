const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should handle basic addition', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('should handle rounding edge cases', function() {
      assert.strictEqual(calculateNumber('SUM', 0.4, 0.4), 0);
      assert.strictEqual(calculateNumber('SUM', 0.5, 0.5), 2);
      assert.strictEqual(calculateNumber('SUM', 1.4, 1.4), 2);
      assert.strictEqual(calculateNumber('SUM', 1.5, 1.5), 4);
    });

    it('should handle negative numbers', function() {
      assert.strictEqual(calculateNumber('SUM', -1, -1), -2);
      assert.strictEqual(calculateNumber('SUM', -1.4, -1.4), -2);
      assert.strictEqual(calculateNumber('SUM', -1.5, -1.5), -2);
    });

    it('should handle zero values', function() {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
      assert.strictEqual(calculateNumber('SUM', 0, 1), 1);
      assert.strictEqual(calculateNumber('SUM', 1, 0), 1);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should handle basic subtraction', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 5, 2.7), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });

    it('should handle rounding edge cases', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.4, 0.4), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 0.5, 0.5), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 1.4), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 1.5), 0);
    });

    it('should handle negative numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1, -1), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -1.4), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -1.5), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', -3, -1), -2);
    });

    it('should handle mixed positive and negative', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, -1), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', -1, 1), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, -1.5), 4);
    });

    it('should handle zero values', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 1), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 0), 1);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when inputs are 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error when dividing by 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, -0.4), 'Error');
    });

    it('should handle basic division', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
      assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
      assert.strictEqual(calculateNumber('DIVIDE', 10, 2.4), 5);
      assert.strictEqual(calculateNumber('DIVIDE', 8.6, 2.4), 4);
    });

    it('should handle decimal results', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
      assert.strictEqual(calculateNumber('DIVIDE', 5, 3), 1.6666666666666667);
      assert.strictEqual(calculateNumber('DIVIDE', 7, 2), 3.5);
    });

    it('should handle rounding edge cases', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 1.5), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 1.5), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 1.5), 1.5);
    });

    it('should handle negative numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -4, 2), -2);
      assert.strictEqual(calculateNumber('DIVIDE', 4, -2), -2);
      assert.strictEqual(calculateNumber('DIVIDE', -4, -2), 2);
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, -4.5), 0.2);
    });

    it('should handle zero dividend', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 1), 0);
      assert.strictEqual(calculateNumber('DIVIDE', 0.4, 1), 0);
      assert.strictEqual(calculateNumber('DIVIDE', -0.4, 1), 0);
    });

    it('should handle edge cases with rounding to zero divisor', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 5, 0.1), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5, 0.3), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5, 0.4), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5, -0.1), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5, -0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5, -0.3), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5, -0.4), 'Error');
    });

    it('should handle divisor rounding to 1', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 5, 0.5), 5);
      assert.strictEqual(calculateNumber('DIVIDE', 5, 0.6), 5);
      assert.strictEqual(calculateNumber('DIVIDE', 5, 1.4), 5);
    });
  });

  describe('Invalid type', function() {
    it('should return Error for invalid operation type', function() {
      assert.strictEqual(calculateNumber('MULTIPLY', 1, 2), 'Error');
      assert.strictEqual(calculateNumber('INVALID', 1, 2), 'Error');
      assert.strictEqual(calculateNumber('', 1, 2), 'Error');
      assert.strictEqual(calculateNumber(null, 1, 2), 'Error');
      assert.strictEqual(calculateNumber(undefined, 1, 2), 'Error');
    });
  });
});
