export default class Airport {
    constructor(name, code) {
      this._name = name;
      this._code = code;
    }
  
    // Override toString method to return the airport code
    toString() {
      return `[object ${this._code}]`;
    }
  
    // Override Symbol.toStringTag to display the airport code when console.log is used
    get [Symbol.toStringTag]() {
      return this._code;
    }
  }