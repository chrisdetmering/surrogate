function MovingObject(type) {
  this.type = type;
}

MovingObject.prototype.move = function () {
  console.log(`${this.type} moves!!!!`);
}


function Ship(type) {
  MovingObject.call(this, type);
}

Function.prototype.inherit = function(BaseClass) { 
  this.prototype = Object.create(BaseClass.prototype);

  this.prototype.constructor = this; 

}

Ship.inherit(MovingObject);


const myShip = new Ship('ship'); 

myShip.move();