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