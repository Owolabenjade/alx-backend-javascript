const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should handle basic addition', function() {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });

    it('should handle rounding edge cases', function() {
      expect(calculateNumber('SUM', 0.4, 0.4)).to.equal(0);
      expect(calculateNumber('SUM', 0.5, 0.5)).to.equal(2);
      expect(calculateNumber('SUM', 1.4, 1.4)).to.equal(2);
      expect(calculateNumber('SUM', 1.5, 1.5)).to.equal(4);
    });

    it('should handle negative numbers', function() {
      expect(calculateNumber('SUM', -1, -1)).to.equal(-2);
      expect(calculateNumber('SUM', -1.4, -1.4)).to.equal(-2);
      expect(calculateNumber('SUM', -1.5, -1.5)).to.equal(-2);
    });

    it('should handle zero values', function() {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
      expect(calculateNumber('SUM', 0, 1)).to.equal(1);
      expect(calculateNumber('SUM', 1, 0)).to.equal(1);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should handle basic subtraction', function() {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 5, 2.7)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });

    it('should handle rounding edge cases', function() {
      expect(calculateNumber('SUBTRACT', 0.4, 0.4)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 0.5, 0.5)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 1.4, 1.4)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 1.5, 1.5)).to.equal(0);
    });

    it('should handle negative numbers', function() {
      expect(calculateNumber('SUBTRACT', -1, -1)).to.equal(0);
      expect(calculateNumber('SUBTRACT', -1.4, -1.4)).to.equal(0);
      expect(calculateNumber('SUBTRACT', -1.5, -1.5)).to.equal(0);
      expect(calculateNumber('SUBTRACT', -3, -1)).to.equal(-2);
    });

    it('should handle mixed positive and negative', function() {
      expect(calculateNumber('SUBTRACT', 1, -1)).to.equal(2);
      expect(calculateNumber('SUBTRACT', -1, 1)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 1.5, -1.5)).to.equal(4);
    });

    it('should handle zero values', function() {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 0, 1)).to.equal(-1);
      expect(calculateNumber('SUBTRACT', 1, 0)).to.equal(1);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return Error when dividing by 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.4, -0.4)).to.equal('Error');
    });

    it('should handle basic division', function() {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
      expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
      expect(calculateNumber('DIVIDE', 10, 2.4)).to.equal(5);
      expect(calculateNumber('DIVIDE', 8.6, 2.4)).to.equal(4);
    });

    it('should handle decimal results', function() {
      expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
      expect(calculateNumber('DIVIDE', 5, 3)).to.equal(1.6666666666666667);
      expect(calculateNumber('DIVIDE', 7, 2)).to.equal(3.5);
    });

    it('should handle rounding edge cases', function() {
      expect(calculateNumber('DIVIDE', 1.5, 1.5)).to.equal(1);
      expect(calculateNumber('DIVIDE', 2.4, 1.5)).to.equal(1);
      expect(calculateNumber('DIVIDE', 2.5, 1.5)).to.equal(1.5);
    });

    it('should handle negative numbers', function() {
      expect(calculateNumber('DIVIDE', -4, 2)).to.equal(-2);
      expect(calculateNumber('DIVIDE', 4, -2)).to.equal(-2);
      expect(calculateNumber('DIVIDE', -4, -2)).to.equal(2);
      expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.2);
    });

    it('should handle zero dividend', function() {
      expect(calculateNumber('DIVIDE', 0, 1)).to.equal(0);
      expect(calculateNumber('DIVIDE', 0.4, 1)).to.equal(0);
      expect(calculateNumber('DIVIDE', -0.4, 1)).to.equal(0);
    });

    it('should handle edge cases with rounding to zero divisor', function() {
      expect(calculateNumber('DIVIDE', 5, 0.1)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 5, 0.2)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 5, 0.3)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 5, 0.4)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 5, -0.1)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 5, -0.2)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 5, -0.3)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 5, -0.4)).to.equal('Error');
    });

    it('should handle divisor rounding to 1', function() {
      expect(calculateNumber('DIVIDE', 5, 0.5)).to.equal(5);
      expect(calculateNumber('DIVIDE', 5, 0.6)).to.equal(5);
      expect(calculateNumber('DIVIDE', 5, 1.4)).to.equal(5);
    });
  });

  describe('Invalid type', function() {
    it('should return Error for invalid operation type', function() {
      expect(calculateNumber('MULTIPLY', 1, 2)).to.equal('Error');
      expect(calculateNumber('INVALID', 1, 2)).to.equal('Error');
      expect(calculateNumber('', 1, 2)).to.equal('Error');
      expect(calculateNumber(null, 1, 2)).to.equal('Error');
      expect(calculateNumber(undefined, 1, 2)).to.equal('Error');
    });
  });
});
