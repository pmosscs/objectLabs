//////////////////////////// PROBLEM 1 ////////////////////////////
/*
  Create an object called me.
  Give it a key of name with the value being your name, and another key of age with the value being your age.
*/

//Code here
const me = {
  name: 'peyton',
  lastname: 'moss',
  title1: 'Mr',
  age: 27
}
console.log(me);

//////////////////////////// PROBLEM 2 ////////////////////////////

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color (a string), age (a number),
//and goodBoy/goodGirl (a boolean).

//Code here
const dog = {
  name: 'westley',
  color: ['brown', 'white', 'black'],
  age: 4
}
console.log(dog);

//////////////////////////// PROBLEM 3 ////////////////////////////
/* Print out the name of the dog you created in problem 2 using dot-notation. */

//Code here
console.log(dog.name);


//////////////////////////// PROBLEM 4 ////////////////////////////
/* Print out the color of the dog you created in problem 2 using bracket-notation. */

//Code here
console.log(dog['color']);


//////////////////////////// PROBLEM 5 ////////////////////////////
/*
  Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
  Have the values to those keys be strings that are equal to your favorite thing in that category.
*/

//Code here
const favoriteThings = {
  band: 'Brand New',
  food: 'Greek',
  person: 'Emily',
  book: 'Harry Potter',
  movie: 'The Prestige',
  holiday: 'Halloween'
}
console.log(favoriteThings);
/*
  After you've made your object, use bracket or dot notation to add another key named 'car' with the value being your favorite car and then another key named 'show' with the value being your favorite show.
*/

//Code here
favoriteThings['car'] = 'Ford Ranger';
favoriteThings['show'] = 'Always Sunny';
console.log(favoriteThings);

/*
  Now use bracket or dot notation to change the value of the food key in your favoriteThings object to be 'Chicken Nuggets'
  and change the value of the book key in your favoriteThings object to be 'Harry Potter'. (If they were either of those things already, change them to something else.)
*/

//Code here
favoriteThings['food'] = 'Chicken Nuggets';
console.log(favoriteThings.food);

//////////////////////////// PROBLEM 6 ////////////////////////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

//Code Here
let { color: carColor, make: carMake, model: carModel, year: carYear } = carDetails;
console.log(carColor, carMake, carModel, carYear);


//////////////////////////// PROBLEM 7 ////////////////////////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/


/********************** ASK ABOUT LATER  ***********************/
//what object? how can we make it universal?
function greeting( obj ) {
  //Code Here
  let { title1: title, name: firstName, lastname: lastName } = obj

  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}
console.log(greeting(me));
console.log(me);


//////////////////////////// PROBLEM 8 ////////////////////////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/
const totalPop = {
  utah: 2000000,
  arizona: 3000000,
  california: 4000000,
  texas: 5000000
}
/**************** WHY *******************/
// //Code Here
// const totalPopulation = obj => {
//   let { utah: pop1, arizona: pop2, california: pop3, texas: pop4 } = obj;
//   return pop1 + pop2 + pop3 + pop4;
// }
// console.log(totalPopulation(totalPop));

function totalPopulation( obj ) {
  return totalPop.utah + totalPop.arizona + totalPop.california + totalPop.texas;
}
console.log(totalPopulation(totalPop));

// let employee = {    // Object we want to destructure
//   firstname: 'Jon',
//   lastname: 'Snow',
//   dateofbirth: '1990'
// };

// // Destructuring the object into our variables
// let { firstname, lastname, dateofbirth } = employee;
// console.log( firstname, lastname, dateofbirth);

//////////////////////////// PROBLEM 9 ////////////////////////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/
const macros = {
  carb: 45,
  fat: 60,
  protein: 35
}

//Code Here
function ingredients(obj) {
  newArr = [];
  let { carb, fat, protein } = obj;
  return newArr.push(carb, fat, protein);
}
ingredients(macros);
console.log(newArr);


//////////////////////////// PROBLEM 10 ////////////////////////////
// Do not edit the code below.
var user = {
  name: 'Bryan',
  age: 24,
  pwHash: 'U+Ldlngx2BYQk',
  email: 'BryanSmith33@gmail.com',
  birthday: '05/02/1990',
  username: 'bryansmith33'
};
// Do not edit the code above.

/*
  Let's say I, the user, decided to change my name and email address to the following:
  name -> 'Bryan G. Smith' and email -> 'bryan.smith@devmounta.in'.
  Make that change without modifying the original object code above.
*/

//Code Here
user['name'] = 'Bryan G. Smith';
user['email'] = 'bryan.smith@devmounta.in';
console.log(user.name, user.email);


//////////////////////////// PROBLEM 11 ////////////////////////////
/*
  Using the user object above, delete the users age off of the object.
*/

//Code Here
delete user.age;
console.log(user);

//////////////////////////// PROBLEM 12 ////////////////////////////
/*
  Create a class called 'Cat'. Make sure to call your constructor, and require these 3 parameters: name, age, color.
  Outside of your class, create an instance of your cat, passing in whatever values you would like.
  Print the name of your cat instance using dot notation.
*/

//Code here
class Cat {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}

let jeanRalphio = new Cat('Jean Ralphio', 3, 'gray');
console.log(jeanRalphio);


//////////////////////////// PROBLEM 13 ////////////////////////////
/*
  Create a class called 'Wizard'. Make sure to call your constructor, and require these 3 parameters: name, age, favoriteSpell.
  Add a function to your Wizard class called castSpell. This function should print "{name} has cast {favoriteSpell}"
  Outside of your class, create an instance of your Wizard, passing in whatever values you would like.
  Call the castSpell function on the instance of your wizard.
*/

//Code here
class Wizard {
  constructor(name, age, favoriteSpell) {
    this.name = name;
    this.age = age;
    this.favoriteSpell = favoriteSpell;
  };

  spell() {
    return `${this.name} has cast ${this.favoriteSpell}`;
};
};

let gandolf = new Wizard('gandolf', 10000, 'fool of a tuk');
console.log(gandolf.spell());


//////////////////////////// PROBLEM 14 ////////////////////////////
/*
    Write a class called Phone. We'll use it as if we were creating
    phone objects to keep track of inventory using an app.

    Phone will build phone objects with brand, model, storage, color, price, and sold properties.

    Write a constructor that sets those values -- all of the values 
    should come from the constructors parameters except sold, which
    should always be set to false. We want that to be false since 
    when we create a new phone, we're putting it in our inventory
    and it won't be sold yet. 

    Create a method called 'sell'.
    sell should be a function that changes the value of sold to true and prints the string: '{brand} {model} has been sold.'
    
    Create another method called 'changePrice'. We can use this 
    to change the price in case a phone isn't selling.
    changePrice should take in one argument, 'newPrice'. 
    Inside the function, reassign the value of the object's price
    to be newPrice.
*/

//Code Here
class Phone{
  constructor(brand, model, storage, color, price) {
    this.brand = brand;
    this.model = model;
    this.storage = storage;
    this.color = color; 
    this.price = price;
    this.sold = false;
  }

  sell() {
    this['sold'] = true;
    return `${this.brand} ${this.model} has been sold.`;
  }

  changePrice(newPrice) {
    this['price'] = newPrice;
  }
}
  
/*
    Next make three new phone instances using your class.
    Send in values of your choice. They should match these data types:
    - brand: string
    - model: string
    - storage: number
    - color: string
    - price: number
*/

//Code Here
let phone1 = new Phone('nokia', 'brick', 001, 'gray', 50);
let phone2 = new Phone('samsung', 's3', 002, 'black', 350);
let phone3 = new Phone('samsung', 'note10', 003, 'blue', 950);

console.log(phone1, phone2, phone3);

/* 
  Call the changePrice function on one of your phones, 
  don't forget to pass in a new price 

  Then console.log that object to see the price change
*/ 

//Code Here 
phone3.changePrice(phone3.price / 2);
console.log(phone3);

/*
  Now call the sell method on one of your other phone objects

  Print the value of that phone's sell property to make sure it's been changed to true
*/

//Code Here 
console.log(phone1.sell());
console.log(phone1.sold);



//////////////////////////// PROBLEM 15 ////////////////////////////

/*
  Use the spread operator to create a copy of the colors object below.
  Store the copy in a variable called colorsCopy.
  Note: We did not cover the spread operator in class. We do not expect you to know how to use it. Challenge yourself by going online and researching what the spread operator is and how to use it.
*/

//do not edit this object
const colors = {
  background: 'red',
  highlight: 'blue',
  text: 'yellow'
}
//do not edit this object

//Code Here 
const colorsCopy = {...colors};
console.log(colorsCopy);


/*
 Now use the spread operator to combine the following 2 objects into one. 
 Call the new variable helensInfo. 
 When they combine, none of the properties should be repeated.
*/

//do not edit the objects below
const contactInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  phoneNumber: 1234445555,
  email: 'helen@mymail.com',
}

const shippingInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  street: '100 E. Main Street',
  city: 'Anytown',
  state: 'AZ',
  zipCode: 85004,
}
//do not edit the objects above

//Code Here
const helensInfo = {...contactInfo, ...shippingInfo};
console.log(helensInfo);

//Print helensInfo to see what it looks like, there should be no repeating properties.


//////////////////////////// PROBLEM 16 ////////////////////////////

/*
  Create a class called Vehicle. Make sure to call your constructor, 
  and require these 3 parameters: capacity (how many passengers), color, and mileage.

  Write a method inside your class called 'move'.
  The move function should take in one parameter, miles.
  Inside the function, add the number of miles to the object's mileage.
  And finally, print the value of the mileage.
*/

//Code Here 
class Vehicle{
  constructor(capacity, color, mileage) {
    this.capacity = capacity;
    this.color = color;
    this.mileage = mileage;
  }

  move(miles) {
    this.mileage = this.mileage + miles;
    console.log(this.mileage);
  }
}

/*
  Create a vehicle using your new class and save it to a variable called myFirstVehicle
*/

//Code Here
let myFirstVehicle = new Vehicle(5, 'white', 64000);
console.log(myFirstVehicle);
myFirstVehicle.move(35000);
console.log(myFirstVehicle.mileage);

/* 
  Now we'll create a class that's based off of the vehicle class. 

  Write a class called Motorcycle that *extends* the Vehicle class. In the constructor, 
  make sure you require all of the parameters from the Vehicle class as well as 2 
  new ones: make and isCool. (Hint: don't forget to call the super function)
*/

//Code Here
class Motorcycle extends Vehicle{
  constructor(capacity, color, mileage, make, isCool) {
    super(capacity, color, mileage)
    this.make = make;
    this.isCool = isCool;
  }
}


/*
  Create a Motorcycle using your new class and save it to a variable called myFirstMotorcycle
*/

//Code Here 
let myFirstMotorcycle = new Motorcycle(2, 'black', 2000, 'suzuki', true);
console.log(myFirstMotorcycle);

/*
  Call the move function on myFirstMotorcycle (don't forget the parameter)
*/
myFirstMotorcycle.move(300);

/*
  Let's make another class based off of Vehicle. 

  Write a class called Boat that *extends* the Vehicle class. The constructor should take in
  all the same arguments as Vehicle plus 3 new ones: 
  name (boats gotta have cool names), type (ski boat, yacht, etc), and isSeaworthy.

  Create a method inside of the Boat class called checkSeaworthiness 
  Inside the method, check to see if the boat is seaworthy
  If it is, console.log a string: 'The {color} {type} {name} is seaworthy!'
  If it isn't, console.log a string: 'You need to get your {type} in shape!'

  Write a second function in this class called performMaintenance 
  This function should set isSeaworthy to be true
*/

//Code Here
class Boat extends Vehicle{
  constructor(capacity, color, mileage, name, type, isSeaWorthy){
    super(capacity, color, mileage)
    this.name = name;
    this.type = type;
    this.isSeaWorthy = isSeaWorthy;
  }

  checkSeaWorthiness() {
    if (this.isSeaWorthy) {
      return `The ${this.color} ${this.type} ${this.name} is seaworthy!`;
    } else {
      return `You need to get your ${this.type} in shape!`
    }
  }

  performMaintinance() {
    this.isSeaWorthy = true;
  }
}

/*
  Create a new boat using your class. You can choose whatever values you like for all the 
  properties except isSeaworthy -- make that one false. Call your variable myFirstBoat.
*/

//Code Here
let myFirstBoat = new Boat(5, 'red', 0, 'The Great Lady', 'Pirate Ship', false);
console.log(myFirstBoat);
/*
  Call the checkSeaworthiness method on your new boat
*/

//Code Here
console.log(myFirstBoat.checkSeaWorthiness());

/*
  Now run the performMaintenance method on your boat
*/

//Code Here 
myFirstBoat.performMaintinance();

/*
  Check the seaworthiness once more (you should be ready for the water!)
*/

//Code Here
console.log(myFirstBoat.checkSeaWorthiness());