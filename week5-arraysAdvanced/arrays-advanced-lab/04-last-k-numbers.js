function last(n, k) {
    let newSeq = [];
    newSeq.push(1); // [1]
    let sum = 0;
    while (newSeq.length < n) {
        let workArr = newSeq.slice(0);
        let removedElements = [];

        if (workArr.length < k) {
            removedElements = workArr.splice(0)
        } else {
            removedElements = workArr.splice(workArr.length - k, k);
        }
        
        for (let i = 0; i <= k; i++) {
            if (typeof removedElements[i] !== 'number') {
                break;
            } else {
                sum += removedElements[i]
            }
        }
        newSeq.push(sum);
        workArr = [];
        sum = 0;
        
    }
    console.log(newSeq.join(' '))
}

last(8, 2)
