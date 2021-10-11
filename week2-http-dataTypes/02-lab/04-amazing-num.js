function solve(num) {
    num = num.toString();
    
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
        
    };
    result = sum.toString().includes('9');
    
    console.log(result ? `${Number(num)} Amazing? True` : `${Number(num)} Amazing? False`);

}

solve(1233)