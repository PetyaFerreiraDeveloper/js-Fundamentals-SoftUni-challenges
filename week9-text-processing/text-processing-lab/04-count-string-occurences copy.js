function count(text, word) {
    let count = 0;
    let newText = text;
    while (newText.includes(word)) {
        count++;
        newText = newText.replace(word, '');
    }
    console.log(count);

}

count('This is a word and it also is a sentence',
'is'
)