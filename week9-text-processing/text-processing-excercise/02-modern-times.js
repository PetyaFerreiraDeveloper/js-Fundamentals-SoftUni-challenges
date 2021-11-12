function modern(sentence) {
    let result = [];
    for (let el of sentence.split(' ')) {
        
        if(el[0] === '#' && el.length !== 1) {
            result.push(el.substring(1))
        }
    }
    let final = [];
    for (let el of result) {
        let arr = el.split('');
        let arrL = arr.length;
        let flag = true;

        for (let i = 0; i < arrL; i++) {
            let currCode = arr[i].charCodeAt(0);
            if ((currCode < 97 || currCode > 122) && 
                (currCode < 65 || currCode > 90)) {
                    flag = false
                }
        }
        if (flag) {
            final.push(el)
        }
    }
    console.log(final.join('\n'));
}

modern('Nowadays everyone uses # to tag a #special word in #socialMedia')