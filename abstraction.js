// Implementing abstraction using classes
class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this._fuel = 100; // Convention: underscore prefix suggests "private"
    }
    
    getFuelLevel() {
      return this._fuel + "%";
    }
    
    drive(distance) {
      if (this._fuel > 0) {
        this._fuel -= this._calculateFuelConsumption(distance);
        if (this._fuel < 0) this._fuel = 0;
        console.log(`Drove ${distance} miles. Fuel remaining: ${this.getFuelLevel()}`);
      } else {
        console.log("No fuel left!");
      }
    }
    
    // "Private" method (not truly private, just a convention)
    _calculateFuelConsumption(distance) {
      return distance / 10; // Simplified formula
    }
  }
  
  const car = new Vehicle("Toyota", "Camry");
  console.log(car.getFuelLevel()); // Output: 100%
  car.drive(150);
  console.log(car.getFuelLevel()); // Output: 85%
