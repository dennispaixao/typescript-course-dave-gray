"use strict";
//key of assertions
//function getProperty(obj: Person, key: keyof Person) {
//    return obj[key];
//  }
function getProperty(obj, key) {
    return obj[key];
}
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "age"));
console.log(getProperty(person, "name"));
const myDictionary = {
    name: 'Alice',
    age: 30,
};
for (const key in myDictionary) {
    console.log(key + ": " + myDictionary[key]);
}
