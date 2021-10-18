function num(str) {
    let arr = str.split(' ');
    arr = arr.map(x => Number(x));

    let sum = arr.reduce((sum, el) => {
        return sum + el
    }, 0);
    let numberElements = arr.length;
    let average = sum / numberElements;
    let emptyArr = [];
    // let newArr = arr.filter((element) => {
    //     if (element > average) {
    //         return element
    //     }
    // })
    let newArr = arr.filter(element => element > average)
    
    newArr = newArr.sort((a, b) => {
        return b - a
    })

    newArr = newArr.slice(0, 5);
    if (newArr.length === 0) {
        console.log('No')
    } else {
        console.log(newArr.join(' '))
    }
   
}

num('1')