// Write a function called formatName that takes an options object of type NameOptions as a parameter. The NameOptions type should have the following optional properties:

// firstName (string)
// lastName (string)
// title (string)

// The function should return the formatted name as a string, including the title (if provided), first name, and last name. Use the nullish coalescing operator to handle optional properties and provide default values for firstName and lastName.

type NameOptions = {
  firstName?: string;
  lastName?: string;
  title?: string;
};

// function formatName(options: NameOptions = {}): string {
//   let firstName = options.firstName ?? 'John';
//   let lastName = options.lastName ?? 'Doe';
//   return `${options.title ?? ''} ${firstName} ${lastName}`;
// }

function formatName({firstName = 'John', lastName = 'Doe', title = ''}: NameOptions): string {
  return `${title} ${firstName} ${lastName}`;
}


const formattedName = formatName({
  firstName: "Jane",
  lastName: "Smith",
  title: "Dr.",
});

console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe