function arraysDemo7() {
    let arr = [1, 2, 3, 5];
    let removedElements = arr.splice(0);
    console.log(arr); // [1, 2, 5]
    console.log(removedElements); // [3, 4]
}

arraysDemo7()