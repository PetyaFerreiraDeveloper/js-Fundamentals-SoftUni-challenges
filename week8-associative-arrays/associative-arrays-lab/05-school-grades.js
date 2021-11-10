function grades(arr) {
    let map = new Map();
    for (let el of arr) {
        let line = el.split(' ');
        let name = line.shift();
        line = line.map(el => +el);
        if (!map.has(name)) {
            map.set(name, line);
        } else {
            let currGrades = map.get(name);
            for (let el of line) {
                currGrades.push(el);
            }
        }
    }

   let entriesArr = Array.from(map);
   let sorted = entriesArr.sort((a, b) => average(a, b)) // need to create that function

   function average(a, b) {
       let aSum = 0;
       for (let el of a[1]) {
           aSum += el;
       }
       let bSum = 0;
       for (let el of b[1]) {
           bSum += el;
       }
       let aAvg = aSum / a[1].length;
       let bAvg = bSum / b[1].length;
       return aAvg - bAvg;
   }
   
   sorted.forEach(el => {
       let name = el[0];
       let gradesArr = el[1];
       let grades = gradesArr.join(', ')
       console.log(`${name}: ${grades}`);
   })
}

grades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']

)