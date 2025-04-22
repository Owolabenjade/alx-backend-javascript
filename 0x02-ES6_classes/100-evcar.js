import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call parent constructor with brand, motor, color
    super(brand, motor, color);
    
    // Add new property for range
    this._range = range;
  }

  // Override Symbol.species to return Car class instead of EVCar
  static get [Symbol.species]() {
    return Car;
  }
}