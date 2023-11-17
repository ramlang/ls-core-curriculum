// Please convert this code to TypeScript using interfaces and interface extension. Assume all animals have a name and can makeSound, and dogs in addition can fetch.

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   makeSound() {
//     return "Generic animal sound";
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }

//   fetch() {
//     return `${this.name} fetches a stick.`;
//   }
// }

// const myDog = new Dog("Rex");
// console.log(myDog.fetch());

interface AnimalType {
  name: string;
  makeSound(): string;
}

interface DogType extends AnimalType {
  fetch(): string;
}

const myDog: DogType = {
  name: "Rex",
  makeSound: () => "Generic animal sound",
  fetch: () => "Rex fetches a stick.",
};

console.log(myDog.fetch());
