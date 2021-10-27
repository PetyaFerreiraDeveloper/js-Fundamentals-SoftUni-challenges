// functions map(), filter(), sort(), reduce()

// using map to loop through an array and do manipulation of all its elements. Map returns an array
function arraysDemo() {

    let arr= ['5', '123', '55', '11'];
    // let arrOfNum = [];
    // for (let i= 0; i < arr.length; i++) {
    //     arrOfNum.push(Number(arr[i]));
    // }
    let arrOfNum = arr.map((el) => {
        return Number(el);
    })

    console.log(arrOfNum) // [5, 123, 55, 11]
}

arraysDemo()

// map example 2
function arraysDemo1() {

    let arr= [5, 123, 55, 11];
    let arrOfNum = arr.map((el) => {
        return el * 2;
    })

    console.log(arrOfNum) // [10, 4, 14, 20]
}

arraysDemo1()

// filter example - we can go through an array and filter out a result by a criteria and it will return a new array with the filtered result
function arraysDemo2() {

    let arr= [5, 122, 55, 12];
    let newArr = arr.filter((el) => {
        if (el % 2 === 0) { // this can also be written like: return el % 2 === 0
            return el;
        }
    })

    console.log(newArr) // [122, 12]
}

arraysDemo2()

// reduce method example - reduces final result, which can be a logic. The first argument in the reduce function is an accumulator, the second argument is each element of an array. It can have two arguments, where the second argument the 0 in this case is what the sum value is at the start of the function. 
function arraysDemo3() {

    let arr = [5, 10, 20, 5];
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    // }
    // console.log(sum)

    let sum = arr.reduce((sum, el)=>{
        return sum + el;
    }, 0)
    console.log(sum); // 40

}

arraysDemo3()

// sort numbers
function arraysDemo4() {

    let arr = [5, 10, 0, -5];
    let sortedArr = arr.sort((a, b) => {
        return a - b // sorts in Asc order [-5, 0, 5, 10]
        return b - a // sorts in Dsc order [10, 5, 0, -5]
    })

    console.log(sortedArr)

}

arraysDemo4()

// sort strings
function arraysDemo5() {

    let arr = ['b', 'ccs', 'aa'];
    let sortedArr = arr.sort((a, b) => {
        return a.length - b.length; // compare the length of strings ['b', 'aa', 'ccs']
        return a.localeCompare(b); // sorts alpabetically ['aa', 'b', 'ccs']
    })

    console.log(sortedArr)

}

arraysDemo5()

// sort strings by two criterias
function arraysDemo6() {

    let arr = ['bb', 'ccs', 'aa'];
    let sortedArr = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b); // compare first the length then alpabetically
    })

    console.log(sortedArr)

}

arraysDemo6()

// forEach goes through each element of an array
// with forEach i only take values - do not change the arr (do not create new array)
// We use forEach for printing

function arraysDemo7() {
    let arr = [5, 10, 0, -5];
    arr.forEach(num => console.log(num))
}

arraysDemo7()

// for (let c of cats) {
//     c.meow()
// }
