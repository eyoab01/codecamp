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

// Only change code below this line


Dog.prototype = Object.create(Animal.prototype);