function shoot(input) {
    let targets = input.shift(); // string
    let targetsArr = targets.split(' '); // elements are strings
    targetsArr = targetsArr.map(x => Number(x)); // elements are numbers
    input.pop() // to remove the end element
    let shots = input.map(x => Number(x));
    let shotCount = 0;

    for (let i = 0; i < shots.length ; i++) {
        let currentShot = shots[i];
        let currentTarget = targetsArr[currentShot];

        if (currentTarget > -1) {
            targetsArr[currentShot] = -1;
            shotCount++;
            for (let j = 0; j < targetsArr.length; j++) {
                if (targetsArr[j] > -1) {
                    if (targetsArr[j] > currentTarget) {
                        targetsArr[j] -= currentTarget;
                    } else {
                        targetsArr[j] += currentTarget;
                    }
                }
            }
        }
        
    }
    console.log(`Shot targets: ${shotCount} -> ${targetsArr.join(' ')}`)
}

shoot
(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])
