// Create a Car class. It should have the following properties:
// 1. Make
// 2. Model
// 3. Year
// 4. Color
// 5. Price

// Give the class the following methods:
// 1. A method that changes the car's color, and console logs the original color, as well as the new color
// 2. A method that changes the car's price, and logs the original price, as well as the new price


//======================================================================
class Car{
    constructor(make, model, year, color, price){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
    }

    changeColor(color) {
        console.log(`The color was changed from ${this.color} to ${color}.`);
        this.color = color; 
    }

    changePrice(price) {
        console.log(`The price was changed from ${this.price} to ${price}.`);
        this.price = price;
    }
}

let fEscape = new Car('Ford', 'Escape', 2013, 'white', 7400);
console.log(fEscape);
fEscape.changePrice(6800);
fEscape.changeColor('Blue');


//====================================================================

// Create a Driver class that extends the car class. It should have the following additional properties:
// 1. Name of the driver
// 2. Driver's state of residence
// 3. Driver's age

// Give the class the following methods:
// 1. A method that logs the driver's name, and their car's make, model, and color
// 2. A method that updates the driver's car details in full -- logging their old car, and their new purchase to the console

//====================================================================
class Driver extends Car {
    constructor(make, model, year, color, price, name, state, age) {
        super(make, model, year, color, price)
        this.name = name;
        this.state = state;
        this.age = age;
    }

    driversName() {
        console.log(`${this.driver} ${this.make} ${this.color}`);
    }

    /*******************THIS IS WHERE I AM WORKING******************/
    carUpdate(make, model, year, color, price) {
        console.log(`the old car has sold: ${JSON.stringify(this)}`);
        
    
    }

}

console.log(fEscape);
fEscape = new Driver('Ford', 'Escape', 2013, 'white', 7400, 'peyton', 'UT', 27);
console.log(fEscape);

fEscape.carUpdate();


//===================================================================