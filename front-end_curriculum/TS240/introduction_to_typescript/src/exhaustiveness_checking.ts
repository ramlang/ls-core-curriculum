type Elephant = {
  kind: "elephant";
  weight: number;
};

type Tiger = {
  kind: "tiger";
  speed: number;
};

type Peacock = {
  kind: "peacock";
  featherLength: number;
};

type Giraffe = {
  kind: "giraffe";
}

type Animal2 = Elephant | Tiger | Peacock | Giraffe;

// Write a function describeAnimal that takes an Animal as an argument and returns a string describing that animal's characteristic feature. For example, if the animal is an elephant, the function should return "An elephant weighs [weight] kg.". Include an exhaustiveness check in your function to handle potential future additions to the Animal type.

function describeAnimal(animal: Animal2): string {
  switch(animal.kind) {
    case "elephant":
      "An elephant weighs [weight] kg.";
      break;
    case "tiger":
      "A tiger.";
      break;
    case "peacock":
      break;
    default:
      const _exhaustiveCheck :never = animal;
      throw new Error("animal unknown");
  }
}