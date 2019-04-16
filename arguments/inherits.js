Function.prototype.inherits1 = function (SuperClass) {
    function Surrogate() {};
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};

Function.prototype.inherits2 = function inherits2(SuperClass) {
    this.prototype = Object.create(SuperClass.prototype);
    this.prototype.constructor = this;
};

// function MovingObject() {
    
// }

// function Ship() {
    
// }

// Ship.inherits1(MovingObject);

// function Asteroid() {

// }

// Asteroid.inherits1(MovingObject);
function Dog(name) {
    this.name = name;
}

Dog.prototype.bark = function bark() {
    console.log(this.name + " barks!");
};

function Corgi(name) {
    Dog.call(this, name);
}

Corgi.inherits1(Dog);

Corgi.prototype.waddle = function waddle() {
    console.log(this.name + " waddles!");
};

const blixa = new Corgi("Blixa");
blixa.bark();
blixa.waddle();