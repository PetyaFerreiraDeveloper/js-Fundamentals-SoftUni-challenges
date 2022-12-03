// Strings are immutable - when we make an operation with string, it is created in a new place in the memory

// access by index
let str = "hello"
ch = str.charAt(2)
// console.log(ch);

// Manipulating of strings

let greet = 'Hello '
let firstName = 'Petya'

let result = greet.concat(firstName);
/// console.log(result);

let strNew = 'I am JavaScript developer'
//console.log(strNew.indexOf('Java'));

// find last index
let str1 = 'Intro to programming'
let last = str.lastIndexOf('o');
//console.log(last);

// substring(startIndex, endIndex) - startIndex is included, endIndex is excluded
let sub = strNew.substring(5, 10);
console.log(sub); // JS
console.log(strNew);


// substring(startIndex) returns everything after the starting index
let sub1 = strNew.substring(5);

// replace(search, replacement) It replaces only the first one
let text = 'Hello world, you are big'
let replaced = text.replace('o', 'a')
// console.log(replaced);

// replaceAll(search, replacement). replaces all characters
let text111 = 'Hello world, you are big'
let replaced1 = text.replaceAll('o', 'a')
// console.log(replaced1);

// replace all characters in a string with another character
let password = 'myPassword';
let encrypted = password.replace(/./g, '*');
// console.log(encrypted);

// split(separator) returns an array with the splitted elements
let fullSentence = 'I love Rio De Janeiro';
let splittedSentence = fullSentence.split(' ');
console.log(splittedSentence);

// includes(substr) - returns true or -1
let text1 = 'I love fruits'
//console.log(text1.includes('fruits'));

// repeat(count) - creates a new string repeated count times
let n = 3;
for(let i = 1; i<= n; i++) {
    // console.log('*'.repeat(i));
}

// use trim() to remove white spaces

//let text = 

// use trimStart() or trimEnd()

// use startsWith() - to determine whether a string begins with the characters of a specified substring

let text5 = 'My name is Petya'

// padStart() add to the current string another substring at the start until a length is reached

// padEnd() - to use with Read More

let newText5 = text5.padEnd(7, '.')
// console.log(newText5);
let test1 = text5.slice(3, 5);
//console.log(test1);