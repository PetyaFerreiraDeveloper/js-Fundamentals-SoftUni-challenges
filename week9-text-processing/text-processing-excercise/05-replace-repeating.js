function replaceRepeat(input) {
    let newStr = '';
    let inputL = input.length;
    for (let i = 0; i < inputL; i++) {
        if (input[i + 1] !== input[i]) {
            newStr += input[i]; 
        }
    }
    console.log(newStr);
}

replaceRepeat('aaaaabbbbbcdddeeeedssaa')