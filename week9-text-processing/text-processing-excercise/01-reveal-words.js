function reveal(words, sentence) {

    let wordsArr = words.split(', ');

    for (let word of wordsArr) {
        let template = '*'.repeat(word.length);
        sentence = sentence.replace(template, word);
    }
    console.log(sentence);
}

reveal('great, learning',
'softuni is ***** place for ******** new programming languages'

)