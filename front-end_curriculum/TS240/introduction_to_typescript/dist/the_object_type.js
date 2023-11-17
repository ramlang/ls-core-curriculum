"use strict";
function getProperty(obj, key) {
    return obj[key];
}
const obj = {
    name: "John",
    age: 30,
};
const x = getProperty(obj, "name");
const y = getProperty(obj, "age");
