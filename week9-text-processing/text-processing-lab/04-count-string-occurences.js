function count(text, word) {
    let count = 0;
    let textArr = text.split(' ');
    for (let el of textArr) {
        if (el === word) {
            count++;
        }
    }
    console.log(count);

}

count('This is a word and it also is a sentence',
'is'
)