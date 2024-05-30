//key of assertions

interface Person {
  name: string;
  age: number;
}

//criando as keys de Person

type PersonKey = keyof Person; // name | age

//function getProperty(obj: Person, key: keyof Person) {
//    return obj[key];
//  }

function getProperty(obj: Person, key: PersonKey) {
  return obj[key];
}

const person: Person = { name: "Alice", age: 30 };

console.log(getProperty(person, "age"));
console.log(getProperty(person, "name"));


//index signature

interface Dictionary {
    [key: string]: any;
  }
  
  const myDictionary: Dictionary = {
    name: 'Alice',
    age: 30,
  };
  
  for (const key in myDictionary) {
    console.log(key + ": " + myDictionary[key]);
  }