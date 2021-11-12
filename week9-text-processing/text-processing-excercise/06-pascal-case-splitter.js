function pascal(str) {
    let arr = [];
    let step = 0;
    for (let i = 0; i < str.length; i++) {
        let word = '';
        word += str[i];
        i++;
        while (str[i] !== str[i].toUpperCase()) {
            word += str[i];
            i++;
        }
        arr.push(word);
        //step = word.length;
    }

    console.log(arr);

}

pascal('SplitMeIfYouCanHaHaYouCantOrYouCan')