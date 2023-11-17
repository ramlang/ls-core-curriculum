"use strict";
// Write a function called formatName that takes an options object of type NameOptions as a parameter. The NameOptions type should have the following optional properties:
function formatName(options = { firstName: 'John', lastName: 'Doe' }) {
    var _a;
    let firstName = options.firstName;
    let lastName = options.lastName;
    return `${(_a = options.title) !== null && _a !== void 0 ? _a : ''} ${firstName} ${lastName}`;
}
const formattedName = formatName({
    firstName: "Jane",
    lastName: "Smith",
    title: "Dr.",
});
console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe
