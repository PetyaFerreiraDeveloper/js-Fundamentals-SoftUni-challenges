function trainFun(arr) {
    let wagons = arr[0].split(' ');
    wagons = wagons.map((el) => {
        return Number(el)
    })
    // remove the initial wagon from the arr
    arr.shift();
    let maxCapacity = Number(arr[0]);
    // remove the capacity from arr
    arr.shift()
    for (let i = 0; i < arr.length; i++) {
        
        let newPassangersArr = arr[i].split(' ');
        let newWagon = Number(newPassangersArr[1]);
        let numNewPassengers = Number(newPassangersArr[0]);

        if (newPassangersArr.length > 1) {
            wagons.push(newWagon)
        } else {
            for (let j = 0; j < wagons.length; j++) {
                let numPassInWagon = wagons[j];
                if ((numPassInWagon + numNewPassengers) <= maxCapacity) {
                    numPassInWagon += numNewPassengers;
                    wagons.splice(j, 1, numPassInWagon);
                    break;
                } 
            }
        }   
    }
    console.log(wagons.join(' '))
}

trainFun(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']

)