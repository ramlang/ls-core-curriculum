interface Shape {
  color: string;
}

interface Rectangle extends Shape {
  length: number;
  width: number;
}

interface Circle extends Shape {
  radius: number;
}

function displayShapeInfo(shape: Shape): string {
  if ("radius" in shape) {
    return `I am a ${shape.color} circle!`;
  } else {
    return `I am a ${shape.color} rectangle!`;
  }
}
// Please define a new interface, Shape, that encapsulates the shared properties of Rectangle and Circle. Then, implement a function displayShapeInfo that accepts a Shape object and returns a string with information about the shape. Make sure your function works correctly with both Rectangle and Circle objects.

console.log(displayShapeInfo({radius: "2", color: "blue"}));
console.log(displayShapeInfo({length: "2.5", color: "red"}));