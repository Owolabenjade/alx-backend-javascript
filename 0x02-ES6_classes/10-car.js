export default class Car {
    constructor(brand, motor, color) {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    // Clone method to return a new object of the same class
    cloneCar() {
      // Get the constructor of the current instance (works for subclasses too)
      const Species = this.constructor[Symbol.species] || this.constructor;
      return new Species();
    }
  
    // Symbol.species allows us to control what constructor is used when creating derived objects
    static get [Symbol.species]() {
      return this;
    }
  }