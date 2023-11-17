interface Movable {
  speed: number;
  move(): void;
}

// Please create a Car class that implements the Movable interface. Ensure the move method outputs a message to the console.

class Car implements Movable {
  speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  move(): void {
    return console.log(`${this.speed} nyoom`);
  }
}