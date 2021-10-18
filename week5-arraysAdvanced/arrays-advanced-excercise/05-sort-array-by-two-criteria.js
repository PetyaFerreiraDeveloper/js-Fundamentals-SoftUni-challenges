function sort(arr) {
    let sortedArr = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    })
    for (item of sortedArr) {
        console.log(item)
    }
    
}

sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])