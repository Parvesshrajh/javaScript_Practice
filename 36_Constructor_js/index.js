// constructor = special method for defining the 
//               properties and methods of objects

function Car(make, model, year, color){  // Car is a constructor 
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");
console.log(car1.make + car1.model + car1.year + car1.color);
console.log(car2.make + car2.model + car2.year + car2.color);
console.log(car3.make + car3.model + car3.year + car3.color);

// A constructor is a special method in a class that is automatically invoked when an object is created, 
// and it is used to initialize the object’s data members.