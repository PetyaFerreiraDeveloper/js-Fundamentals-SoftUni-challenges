function right(str, char, output) {
    let result = str.replace('_', char);
    let finalResult = result === output ? 'Matched' : 'Not Matched';
    console.log(finalResult);
}

right('Str_ng', 'i', 'String')