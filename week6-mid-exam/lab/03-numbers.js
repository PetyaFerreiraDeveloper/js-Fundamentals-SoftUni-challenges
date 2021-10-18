function num(str) {
    let arr = str.split(' ');
    arr = arr.map(x => Number(x));

    let sum = arr.reduce((sum, el) => {
        return sum + el
    }, 0);
    let numberElements = arr.length;
    let average = sum / numberElements;
    let emptyArr = [];
    let newArr = arr.filter((element) => {
        if (element > average) {
            return element
        }
    })

    newArr = newArr.sort((a, b) => {
        return b - a
    })
    if (newArr.length === 0) {
        console.log('No')
    } else if (newArr.length <= 5) {
        console.log(newArr.join(' '));
    } else {
        for (let i = 0; i < 5; i++) {
            emptyArr.push(newArr[i])
        }
        console.log(emptyArr.join(' '));
    }
}

num('5 2 3 4 -10 30 40 50 20 50 60 60 51')