
// You should be able to define methods / attributes on MovingObject that ship and asteroid instances can use.

// The Ship and Asteroid prototypes should not be instances of MovingObject.
// After you have written Function.prototype.inherits using the surrogate trick,
//  refactor your solution using Object.create.Make sure to test that your updated solution works.


//Surrogate 'inherit' function
Function.prototype.inherits = function(SuperClass) { 
  function Surrogate() {}; 
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

function MovingObject (type) { 
  this.type = type; 
}

MovingObject.prototype.move = function() { 
  console.log(`${this.type} moves!!!!`); 
}

 
function Ship(type) {
  MovingObject.call(this, type); 
}
Ship.inherits(MovingObject); 

//method on ship prototype
Ship.prototype.takingOff = function() { 
  console.log(this.type + ' taking offff!!!!'); 
}


function Asteriod(type) { 
  MovingObject.call(this, type); 
}

Asteriod.inherits(MovingObject); 

//method on Asteriod prototype
Asteriod.prototype.enteringAtmosphere = function () {
  console.log(this.type + ' is entering the atmosphere!');

}

// const myShip = new Ship('ship'); 
// const myAst = new Asteriod('asteriod'); 
// const myObj = new Object('obj')

// myShip.move(); 
// myShip.takingOff(); 
// myAst.enteringAtmosphere(); 
// myAst.move(); 





