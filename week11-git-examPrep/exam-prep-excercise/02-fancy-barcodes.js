function fancy(input) {
    // remove the count
    input.shift();
    // create the patterns
    let regExp = /\@\#+[A-Z][A-Za-z0-9]{3}[A-Za-z0-9]+[A-Z]\@\#+/;
    let numExp = /\d/g;
    // go through each element of the input, check if the line is a match
    // - if not print invalid
    // - if yes, run second pattern, find digits 
    // add digits as strings and print as a group
    let group;
    for (let el of input) {
        if (regExp.exec(el) == null) {
            console.log('Invalid barcode');
        } else {
            let numArr = el.match(numExp);
            if (!numArr) {
                group = '00';
            } else {
                group = numArr.join('');
            }
            console.log(`Product group: ${group}`);
        }
    }
}
fancy(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])

