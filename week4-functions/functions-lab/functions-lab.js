// function print(str) {
//     console.log(str)
// }

// function returnValue(value) {
//     return value;
// }

// print('hello')
// returnValue('value')
// console.log(returnValue('value'))

// function inside a function
function hLine() {
    console.log('------')
}

function greeting() {
    console.log('Hello')
}

function check() {
    hLine()
    greeting()
    hLine()
}

check()

// arrow functions
let increment = x => x + 1;
console.log(increment(5))

let increment2 = function(x) {
    return x + 1;
}

// each function should perform a single well defined task
// function should be max 20 rows
