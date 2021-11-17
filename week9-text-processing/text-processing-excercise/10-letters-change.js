function letters(input) {
    let alphabetSmall = '0abcdefghijklmnopqrstuvwxyz';
    let alphabetLarge = alphabetSmall.toUpperCase();
    let inpArr = input.split(' ');
    let newArr = [];
    inpArr.forEach(el => {
        if (el.length !== 0) {
            newArr.push(el)
        }
    });
    let sum = 0;
    for (let el of newArr) {
        let elArr = el.split('');
        let firstLetter = elArr.shift();
        let lastLetter = elArr.pop();
        let num = Number(elArr.join(''));
        if (alphabetSmall.includes(firstLetter)) {
            sum += alphabetSmall.indexOf(firstLetter) * num;
        } else if (alphabetLarge.includes(firstLetter)) {
            sum += num / alphabetLarge.indexOf(firstLetter);
        }
        if (alphabetSmall.includes(lastLetter)) {
            sum += alphabetSmall.indexOf(lastLetter);
        } else if (alphabetLarge.includes(lastLetter)) {
            sum -= alphabetLarge.indexOf(lastLetter);
        }
    }
    console.log(sum.toFixed(2));

}

letters('a1A')