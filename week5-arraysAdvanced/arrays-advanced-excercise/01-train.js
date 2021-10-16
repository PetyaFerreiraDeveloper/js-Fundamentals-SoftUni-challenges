function trainFun(arr) {
    let wagons = arr[0].split(' ');
    wagons = wagons.map((el) => {
        return Number(el)
    })
    // remove the initial wagon from the arr
    arr.shift();
    let maxCapacity = arr[1];
    // remove the capacity from arr
    arr.shift()
    console.log(arr.length)
    for (let i = 0; i < arr.length; i++) {
        
        let newPassangers = arr[i].split(' ');
        let numPassangers = Number(newPassangers[1]);
        // arr ['Add 10','Add 0','30','10','75']

        if (newPassangers.length > 1) {
            wagons.push(numPassangers)
        } else {

        }
    }
    // let newArr = arr.map((el) => {
    //     el = el.split(' ');
    //     if (el.length > 1) {
    //         wagons.push(Number(el[1]))
    //     } else {
    //         if ()
    //     }
    // })

    console.log(wagons)
}

trainFun(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)