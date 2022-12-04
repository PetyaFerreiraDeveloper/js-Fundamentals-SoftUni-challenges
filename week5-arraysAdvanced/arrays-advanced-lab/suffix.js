function findEndSuffix(str1, str2) {
    let suffix = [];
    for(let i = str1.length - 1; i >= 0; i--) {
        for(let j = str2.length - 1; j >= 0; j--) {
            if(str1[i] === str2[j]) {
                suffix.push(str1[i]);
            }
            break;
        }
        str2 = str2.slice(0, -1);
    }
    console.log(suffix);
    let suffixReverted = [];
    for (let i = suffix.length - 1; i >= 0; i--) {
        suffixReverted.push(suffix[i])
    }
    console.log(suffixReverted.join(''));
}

findEndSuffix('worldhello', 'dsjfldjflkdasjfklhello')
