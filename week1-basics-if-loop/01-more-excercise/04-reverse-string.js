function reverse(str) {
    // solved with for loop

    // let strL = str.length;
    // let reversedStr = '';
    // for (let i = strL - 1; i >= 0; i--) {
    //     reversedStr += str[i];
    // }
    // console.log(reversedStr)

    // solved with arrays methods
    
    let strArr = str.split('');
    let reverseArr = strArr.reverse() // this method can only be used on arrays
    let revStr = reverseArr.join('') // turns the array into a string
    console.log(revStr) 
}

reverse('hello')