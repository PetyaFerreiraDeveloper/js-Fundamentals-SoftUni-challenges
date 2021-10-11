function merge(arr1, arr2) {
    let arr1Length = arr1.length;
    let newArr = [];
    let newArrElement;
    for (let i = 0; i < arr1Length; i++) {
        if (i % 2 === 0) {
            newArrElement = Number(arr1[i]) + Number(arr2[i]);
        } else {
            newArrElement = arr1[i] + arr2[i];
        }
        newArr.push(newArrElement)
    }
    console.log(newArr.join(' - '))
}

merge(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)