// function arraysIntro() {
//     let arrOfNumbers = [12, 23, 44, 55];
//     let arrLength = arrOfNumbers.length;
//     let lastElement  = arrOfNumbers[arrLength - 1];
//     console.log(lastElement);

//     let testArr = [1];
//     testArr[1] = 10;
//     testArr[10] = 6;
//     let arrayLength = testArr.length;

//     for(let element of testArr) {
//         console.log(element);
//     }

//     // for (let i = 0; i < arrayLength; i++) {
//     //     console.log(`Index: ${i} : ${testArr[i]}`);
//     // }
// }

// arraysIntro()


// function arraysPush() {
//     let newArr = [1,2,3,4,5];
//     newArr.push(100);
//     console.log(newArr);
// }

// arraysPush()

// function arraysIncludes() {
//     let newArr = [1,2,3,4,5];
//     newArr.push(100);
//     let isInArr = newArr.includes(111)
//     console.log(isInArr);
// }

// arraysIncludes()


// function arraysJoin() {
//     let newArr = [1,2,3,4,5];
//     let separator = ''
//     let result = newArr.join(separator);
//     console.log(result);
// }

// arraysJoin()

// function arraysTest(input) {
//     let wordToRevers = input[0]
//     let wordAsArray = wordToRevers.split('');
//     let reversedArray = wordAsArray.reverse();
//     let finalResult = reversedArray.join('');
//     console.log(finalResult);

// }

// arraysTest(['Hello'])

let testArr = [];
testArr[0] = 10;
testArr[1] = 6;
let arrayLength = testArr.length;
console.log(testArr)