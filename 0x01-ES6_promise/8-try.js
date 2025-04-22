/**
 * Attempts to divide numA by numB and returns the result
 * or 'Error: cannot divide by 0' if numB is 0
 * @param {number} numA - Numerator
 * @param {number} numB - Denominator
 * @return {string}
 */
export default function divideFunction(numerator, denominator) {
    if (denominator === 0) {
      return 'Error: cannot divide by 0';
    }
    
    const result = numerator / denominator;
    return result;
  }