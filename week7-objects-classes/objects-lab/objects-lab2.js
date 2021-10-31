// Build in object methods
// Object.entries(person) Loop through the objects key-value pairs (tuples)
let person = {
    name: 'Leo',
    age: 20,
    hairColor: 'red',
    sayHello() {
        console.log('Hello everybody!')
    }
}

function tupleEntriesMethod() {
    let personTuples = Object.entries(person);
    for (let [personKey, personValue] of personTuples) {
        console.log(`${personKey} -> ${personValue}`);
    }
}

//tupleEntriesMethod()

// Object.key(person) iterate over object properties by key 

function keysMethod() {
    let keysArr = Object.keys(person);
    for (let key of keysArr) {
        console.log(`${key}: ${person[key]}`);
    }
   
}

//keysMethod();

// Object.value(person) iterate through the values in the object

function valuesMethod() {
    let valuesArr = Object.values(person);
    for (let val of valuesArr) {
        console.log(`${val}: ${typeof val}`);
    }
    person.sayHello();
} 

//valuesMethod()

// Reference vs Value types
// objects are reference data types. When they get copied, we copy the reference to their place in the memory. Which means that if we change the copy- we will be automatically changing the original object
// In other words the new variable doesn't contain value, but leads to a location with value in it

function copyArr() {
    let arrNum = [1, 3, 5, 7];
    let arrNum2 = arrNum;
    console.log(arrNum2); // [1, 3, 5, 7]
    arrNum2.push(9);
    console.log(arrNum2); // [1, 3, 5, 7, 9]
    console.log(arrNum); // [1, 3, 5, 7, 9]
}

//copyArr()

// Value types are: Boolean, String, Number, null, undefined, Symbol, BigInt
// When we copy the primitive data types - we copy only their value, so when we change the new variable, we do not modify the initial starting variable.

function copyValType() {
    let a = 1;
    let b = a;
    console.log(b); // 1
    b = b + 1;
    console.log(b); // 2
    console.log(a); // 1
}

//copyValType()

// JSON
// Convert an object into JSON with JSON.stringify(person)
// Convert text to JSON with JSON.parse(str)

function convertObjectIntoJSON() {
    let j = JSON.stringify(person);
    console.log(j);
    let convertToObj = JSON.parse(j);
    console.log(convertToObj);
}

//convertObjectIntoJSON();

//Classes

function testClass() {
    class Student {
        constructor(name, grade) {
            this.name = name;
            this.grade = grade;
            this.speak = () => {
                console.log('Hey');
            }
        }
    }
    // creating an instance of the class
    let student = new Student('Peter', 5.00);
    let student1 = new Student();
    console.log(student1);
    student.speak();
}

testClass()