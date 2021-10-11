function printResult(input) {

    let isPalindrome = (num) => {
        let reversedNum = num
        .toString()
        .split('')
        .reverse()
        .join('')

        if (num === Number(reversedNum)) {
            return 'true'
        } else {
            return 'false'
        }
    }

    for(let i = 0; i < input.length; i++) {
        let currentNumber = input[i]
        console.log(isPalindrome(currentNumber))
    }
}

printResult([123, 323, 421, 121])