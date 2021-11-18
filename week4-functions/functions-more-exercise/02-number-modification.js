function numModify(num) {
    // turn the number into string to be able to loop through the digits
    // make a function to find the average of the sum of the digits
    // make a while loop and execute the code in it while the average is less than 5
    // on every iteration in the while loop add a 9 to the string, make sum = 0 and run the checkSum function
    let numStr = num + '';
    let sum = 0;
    checkSum(numStr)

    while (sum / numStr.length <= 5) {
        numStr += 9;
        sum = 0;
        checkSum(numStr);
    }

    function checkSum(str) {
        for (let i = 0; i < str.length; i++) {
            sum += Number(str[i]);
        }
    }
    console.log(Number(numStr));
}

numModify(5835)