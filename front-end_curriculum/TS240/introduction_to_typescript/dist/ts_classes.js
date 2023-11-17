"use strict";
// Please create a Car class that implements the Movable interface. Ensure the move method outputs a message to the console.
class Car {
    constructor(speed) {
        this.speed = speed;
    }
    move() {
        return console.log(`${this.speed} nyoom`);
    }
}
