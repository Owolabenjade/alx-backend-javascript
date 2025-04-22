export default class Building {
    constructor(sqft) {
      // Store in underscore attribute
      this._sqft = sqft;
      
      // Check if this is not an instance of Building class directly
      // but an instance of a child class
      if (this.constructor !== Building) {
        // Check if the child class has implemented evacuationWarningMessage
        if (typeof this.evacuationWarningMessage !== 'function') {
          throw new Error('Class extending Building must override evacuationWarningMessage');
        }
      }
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  }