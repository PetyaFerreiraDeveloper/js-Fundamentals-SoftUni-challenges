function cut(input) {
    let firstHalf = input.substring(0, input.length / 2);
    let secondHalf = input.substring(input.length / 2)
    let firstHalfArr = firstHalf.split('');
    let firstReversed = firstHalfArr.reverse();
    let secondReversed = secondHalf.split('').reverse();
    console.log(firstReversed.join(''));
    console.log(secondReversed.join(''));
    
}

cut('tluciffiDsIsihTgnizamAoSsIsihT')