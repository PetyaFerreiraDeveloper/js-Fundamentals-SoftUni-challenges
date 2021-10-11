function binary(str) {
    let strL = str.length;
    let decimal = 0;
    for (let i = 0; i < strL; i++) {
        decimal = decimal * 2 + Number(str[i]);
    }
    console.log(decimal)
}

binary('11110000')