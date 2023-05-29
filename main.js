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