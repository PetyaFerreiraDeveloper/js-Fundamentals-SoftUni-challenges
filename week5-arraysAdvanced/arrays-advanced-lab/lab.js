//methods push(), unshift(), pop(), shift(), indexOf(), lastIndexOf(), splice(), slice()

// arr.push() adds the element at the end of array

function arraysDemo() {
    let arr = [1, 2, 3, 4, 5];
    arr.push(999)
    console.log(arr) // [1, 2, 3, 4, 5, 999]
}

arraysDemo()

// arr.unsfhit() adds an element at the start of array

function arraysDemo1() {
    let arr = [1, 2, 3, 4, 5];
    arr.unshift(999)
    console.log(arr) // [999, 1, 2, 3, 4, 5]
}

arraysDemo1()

// arr.pop() Removes and Returns the last element in an array. The initial array is modified

function arraysDemo2() {
    let arr = [1, 2, 3, 4, 5];
    let lastElement = arr.pop();
    console.log(arr) // [1, 2, 3, 4]
    console.log(lastElement) // 5
}

arraysDemo2()

// arr.shift() Removes and Returns the first Element in an array. The initial array is modified

function arraysDemo3() {
    let arr = [1, 2, 3, 4, 5];
    let firstElement = arr.shift();
    console.log(arr) // [2, 3, 4, 5]
    console.log(firstElement) // 1
}

arraysDemo3()

// arr.indexOf() returns the index of the element in the array, if it doesnt exist it returns -1

function arraysDemo4() {
    let arr = [1, 2, 3, 4, 5];
    let indexOfElement = arr.indexOf(3)
    console.log(indexOfElement) // 3
}

arraysDemo4()

// arr.lastIndexOf() returns the index of the last element in the array with repeating elements

function arraysDemo4() {
    let arr = [1, 2, 3, 4, 1];
    let lastIndexOfElement = arr.lastIndexOf(1)
    console.log(lastIndexOfElement) // 4
}

arraysDemo4()

// arr.splice() Insert a number in an array. give index at which to place the new element, 0 for deleted items and the item we want to add. It changes the original array 

function arraysDemo5() {
    let arr = [1, 2, 3, 4, 5];
    let indexOfElement = arr.indexOf(3)
    arr.splice(indexOfElement, 0, 999); 
    console.log(arr) // [1, 2, 999, 3, 4, 5]
}

arraysDemo5()

// arr.splice() Replace a number in an array. Remove the old number and put a new insead. First argument is index at which to place the new element, second argument is 1 (to remove one element at this index), third argument is the new element we want to insert. Splice changes the original array and returns the removed number

function arraysDemo6() {
    let arr = [1, 2, 3, 4, 5];
    let indexOfElement = arr.indexOf(3)
    let removedElement = arr.splice(indexOfElement, 1, 999); // arr = [1, 2, 999, 4, 5]
    console.log(arr) // [1, 2, 999, 4, 5]
    console.log(removedElement) // 3
}

arraysDemo6()

// arr.splice() Removes elements from an array and, if necessary, inserts new elements in their place (the third argument). returns — An array containing the elements that were deleted.

function arraysDemo7() {
    let arr = [1, 2, 3, 4, 5];
    let indexOfElement = arr.indexOf(3)
    arr.splice(indexOfElement, 2);
    console.log(arr)
    // console.log(firstElement)
}

arraysDemo7()

// copying of array - THE WRONG WAY! they are referental types. which means that if we assign a new array the value of another array the new array will take the values of the first one, even if we change the first one. Because they take the same memory, because they are referental

function arraysDemo8() {
    let arr = [1, 2, 3, 4, 5];
    let arr2 = arr;
    arr.push(999)
    console.log(arr)
    console.log(arr2)
   
}

arraysDemo8()

// copying of array - the right way with arr.slice(0). Argument is the index of the starting element. Slice() returns new array based on the original array and starting from the specified intex. If it has two arguments, the second is the index of the element to which we want to cut the original array. It will bring all elements between the two indexes
// Slice is a pure funciton because it doesn't change the original array

function arraysDemo9() {
    let arr = [1, 2, 3, 4, 5];
    let arr2 = arr.slice(0);
    arr.push(999)
    console.log(arr)
    console.log(arr2)
   
}

arraysDemo9()

function arraysDemo10() {
    let arr = [1, 2, 3, 66, 15, 18, -5, 5];
    let index = arr.indexOf(66);
    let arr2 = arr.slice(index, index + 3);
    console.log(arr)
    console.log(arr2)
   
}

arraysDemo10()