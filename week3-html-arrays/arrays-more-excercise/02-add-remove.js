function add(arr) {
    let num = 0;
    let arrL = arr.length;
    let newArr = [];

    for (let i = 0; i < arrL; i++) {
        num++;
        switch (arr[i]) {
            case 'add': newArr.push(num);
                break;
            case 'remove': newArr.pop();
                break;
        }
    }
    
    if (newArr.length === 0) {
        console.log('Empty')
    } else {
        console.log(newArr.join(' '))
    }
    
}

add(['add', 'add', 'remove', 'add', 'add'])
add(['remove', 'remove', 'remove'])

