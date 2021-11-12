// create an object with object literal
let obj = {name: 'Peter', age: 20};
// console.log(obj.name);

// define an empty object, and add properties later

let person = {};
person.name = 'Peter';
person['lastName'] = 'Parker';
person.age = 20;
// console.log(person);

// methods of objects are functions
// two ways of creating a function as a property of an object

let person1 = {
    name: 'Peter',
    sayHey: function() {
        console.log('Hello')
    }

}
person1.sayGood = () => console.log('Bye');
// person1.sayGood();

let person2 = {name: 'Peter'};
person1.sayHello = () => console.log('Say Hello')

// Build-in Object Methods
// console.log(Object.values(person))
// console.log(Object.keys(person))
// console.log(Object.entries(person)) // returns tuples - key-value pair

// value vs reference type
// data types copyied by value (primitive types): Boolean, string, number, null, undefined
// specific is that we copy the value and not the memory place

// data types copyied by reference (objects): array, object, functions
// when we copy referenced type we copy the memory place of the object, so when we change the copied element, we change the original element

function objCreator(fn, ln, a) {
    let person = {
        firstName: fn,
        lastName: ln,
        age: a
    }

    let newPerson = person;
    console.log(newPerson.firstName);
    person.firstName = 'Angel';
    console.log(newPerson.firstName);
}

// objCreator('Peter', 'Pan', 20)

//JSON - javaScript object notation
// convert object into json
// JSON.stringify(object)

// convert json into object
// JSON.parse(string)

// CLASSES

// we use them as a receipt for creating many similar objects. Code-template for creating objects
// we define classes with a capital letter
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}

// create an instance of the class - to create an object
let student = new Student('Peter', 5.50);

// functions in classes

class Dog {
    constructor() {
        this.speak = () => {
            console.log('Woof');
        }
    }
}

let dog = new Dog();
//dog.speak();

// object iteration with FOR IN cycle

function objIter() {
    let person = {
        name: 'Arthur',
        age: 3
    }
    for (let per in person) {
        console.log(per);
        console.log(person[per]);
    }
}

// objIter()