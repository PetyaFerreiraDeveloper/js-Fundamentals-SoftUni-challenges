function strSub(word, sentence) {
    word = word.toLowerCase();
    sentence = sentence.toLowerCase();
    let sentArr = sentence.split(' ');

    if (sentArr.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

strSub('javascript',
'javascript is the best programming javascript language'
)