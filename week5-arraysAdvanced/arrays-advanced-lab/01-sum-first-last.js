function sum(arr) {
    let workArray = arr.slice(0);
    let firstNum = Number(workArray.shift());
    let lastNum = Number(workArray.pop())
    let sum = firstNum + lastNum;
    console.log(sum)
}

sum(['5', '10'])