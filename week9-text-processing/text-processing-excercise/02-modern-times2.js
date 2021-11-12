function modern(str) {
    let strArr = str.split(' ');
    let result = [];
    for (let el of strArr) {
        if (el.startsWith('#') && el.length > 1 && checkForDigit(el)) {
            el = el.substring(1);
            result.push(el);
        }
    }
    function checkForDigit(word) {
        let isWord = true;
        for (let ch of word) {
            if (!isNaN(ch)) {
                return false;
            }
        }
        if (isWord) {
            return true;
        }
    }
    console.log(result);
}

modern('Nowadays everyone uses # to tag a #special word in #socialMedia')