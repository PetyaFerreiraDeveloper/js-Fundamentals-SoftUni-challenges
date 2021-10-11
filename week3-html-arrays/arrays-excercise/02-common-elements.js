function compare(arr1, arr2) {
    let arr1Length = arr1.length;
    let arr2Length = arr2.length;

    for (let i = 0; i < arr1Length; i++) {
        let arr1Element = arr1[i];
        
        let isInArr2 = arr2.includes(arr1Element);
        if (isInArr2) {
            console.log(arr1Element)
        }
    }
}

compare(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)