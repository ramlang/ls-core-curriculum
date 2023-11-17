// Write a function describeAnimal that takes an Animal object as a parameter and returns a description string. The Animal type is a discriminated union that can be either a dog or a bird.

// You will need to provide an implementation of the Animal type that uses discriminated unions to handle the different cases. For dogs, it should return "name is a age year(s) old dog."; for birds, it should return "name is a bird with a wingspan cm wingspan."

type Animal = Dog | Bird;

type Dog = {
  type: "bird" | "dog",
  age: number,
  name: string,
}

type Bird = {
  type: "bird",
  age: number,
  name: string,
  wingspan: number,
}

 function describeAnimal(animal: Animal): string {
  if (animal.type === "bird") {
    return "name is a bird with a wingspan cm wingspan.";
  } else {
    return "name is a age year(s) old dog.";
  }
}