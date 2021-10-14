// functions map(), filter(), sort(), reduce()

// using map to loop through an array and do manipulation of its elements. Map returns an array
function arraysDemo() {

    let arr= ['5', '123', '55', '11'];
    // let arrOfNum = [];
    // for (let i= 0; i < arr.length; i++) {
    //     arrOfNum.push(Number(arr[i]));
    // }

    let arrOfNum = arr.map((el) => {
        return Number(el);
    })

    console.log(arrOfNum)

}

arraysDemo()

// map example 2
function arraysDemo1() {

    let arr= [5, 123, 55, 11];
    let arrOfNum = arr.map((el) => {
        return el * 2;
    })

    console.log(arrOfNum)

}

arraysDemo1()

// filter example - creates a new array and we can filter it by a criteria
function arraysDemo2() {

    let arr= [5, 122, 55, 12];
    let newArr = arr.filter((el) => {
        if (el % 2 === 0) {
            return el;
        }
    })

    console.log(newArr)
}

arraysDemo2()

// reduce method example - reduces final result, which can be a logic. The first argument in the reduce function is an accumulator, the second arguments are all the elements in an array
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
    console.log(sum);

}

arraysDemo3()

// sort numbers
function arraysDemo4() {

    let arr = [5, 10, 0, -5];
    let sortedArr = arr.sort((a, b) => {
        return a- b // sorts in Asc order
        return b - a // sorts in Dsc order
    })

    console.log(sortedArr)

}

arraysDemo4()

// sort strings
function arraysDemo5() {

    let arr = ['b', 'ccs', 'aa'];
    let sortedArr = arr.sort((a, b) => {
        // return a.length - b.length; // compare the length of strings
        return a.localeCompare(b); // sorts alpabetically
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