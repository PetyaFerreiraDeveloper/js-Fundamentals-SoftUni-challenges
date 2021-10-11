function char(char1, char2) {
    let result = ''
    let firstCode = char1.charCodeAt(0);
    let secondCode = char2.charCodeAt(0);
    if (firstCode < secondCode) {
        for (let i = firstCode + 1; i < secondCode; i++) {
            result += ` ${String.fromCharCode(i)}`
        }
    } else {
        for (let i = secondCode + 1; i < firstCode; i++) {
            result += ` ${String.fromCharCode(i)}`
        }
    }
    
    console.log(result)
    
}

char('C',
'#'
)