export default class ALXClass {
    constructor(size, location) {
      this._size = size;
      this._location = location;
    }
  
    // Define valueOf method for casting to Number
    valueOf() {
      return this._size;
    }
  
    // Define toString method for casting to String
    toString() {
      return this._location;
    }
  }