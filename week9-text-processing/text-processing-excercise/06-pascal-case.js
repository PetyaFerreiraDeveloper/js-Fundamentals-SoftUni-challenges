function pascal(input) {
    let words = [];
    input = input.split('');
    input.forEach(el => {
        if (el === el.toUpperCase()) {
            words.push(el);
        } else {
            words[words.length - 1] += el;
        }
    })
    console.log(words.join(', '));
}

pascal('SplitMeIfYouCanHaHaYouCantOrYouCan')