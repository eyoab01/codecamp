function Dog(name) {
    this.name = name;
  }
  
  
  Dog.prototype.numLegs=4;
  
  let beagle = new Dog("jacky");
  console.log(beagle)

  function Dog(name) {
    this.name = name;
  }
  
  let beagle2 = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle2); 
  
  Object.prototype.isPrototypeOf(Dog.prototype);

  function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Animal,
    
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Animal,
   
  };
  
  function Animal() { 
    
  }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function(){
      console.log("nom nom nom");
    }
  
  };

  //
  function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};


let duck=Object.create(Animal.prototype); 
let beagle3=Object.create(Animal.prototype);

//Inheritance

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }



Dog.prototype = Object.create(Animal.prototype);

// constructors

function Animal() { }
function Birdy() { }
function Dogy() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);



Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let ducky = new Bird();
let beagley = new Dog();




function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() {

    console.log("Woof!")

}
 
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog;
Dog.prototype.bark= function(){
  console.log("Woof!")
};

// Only change code above this line

let beaglew = new Dog();


/free code camp/


// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  newArr.push(bookName); // Add bookName parameter to the end of the new array.
  return newArr; // Return the new array.
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  if (newArr.indexOf(bookName) >= 0) {
    // Check whether the bookName parameter is in new array.
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
    return newArr; // Return the new array.
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);