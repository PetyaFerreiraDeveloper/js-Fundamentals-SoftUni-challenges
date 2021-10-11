function sum(num){
    let numToString = num.toString();
    let sum = 0;
    for (element of numToString) {
        sum += Number(element);
    }
    console.log(sum)
}

sum(245678);
sum(97561);
sum(543);