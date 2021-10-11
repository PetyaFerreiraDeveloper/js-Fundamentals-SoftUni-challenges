function ladybugs(arr) {
    let boxes = [];
    boxes.length = arr[0];
    let boxLength = boxes.length;
    let positionStr = arr[1];
    let newArr = positionStr.split(' ');

    // place the ladybugs on the playboard
    for (j = 0; j < newArr.length; j++) {
        let placeLady = Number(newArr[j]);
        //console.log(placeLady)
        if (placeLady >= 0 && placeLady < boxLength) {
            for (let k = 0; k <= boxLength; k++) {
                if (placeLady === k) {
                    boxes[k] = 1;
                }
            }
        }
    }
    // console.log(boxes);
    // start moving the ladies
    for (let i = 2; i < arr.length; i++) {
        let currentTask = arr[i];
        let currentTaskArr = currentTask.split(' ');
        //console.log(currentTaskArr);
        let from = Number(currentTaskArr[0]);
        let direction = currentTaskArr[1];
        let jump = Number(currentTaskArr[2]);
        if (boxes[from] === 1) {
            boxes[from] = 0;
            //console.log(`There is a ladyBug in ${from} postition`);
            if (direction === 'right') {
                for (let j = from + jump; j <= boxLength - 1; j += jump) {
                    if (j < 0) {
                        break;
                    }
                    if (boxes[j] !== 1) {
                        boxes[j] = 1;
                        break;
                    }
                }
            } else if (direction === 'left') {
                for (let j = from - jump; j >= 0; j -= jump) {
                    if (j > boxLength - 1) {
                        break;
                    }
                    if (boxes[j] !== 1) {
                        boxes[j] = 1;
                        break;
                    }
                }
            }
        }

    }

    for (let i = 0; i < boxLength; i++) {
        if (boxes[i] === undefined) {
            boxes[i] = 0;
        }
    }
    console.log(boxes.join(' '));
}

ladybugs([ 3, '0 5',
'3 right 1',
'2 right 1' ]

)