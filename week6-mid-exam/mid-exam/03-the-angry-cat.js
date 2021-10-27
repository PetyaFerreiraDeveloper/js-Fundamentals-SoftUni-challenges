function solve(items, entryIndex, type) {
    items = items.map(Number);
    let priceEntryItem = items[entryIndex];
    let leftArr = items.splice(0, entryIndex);
    items.shift(); // the arr of items on the right
    //console.log(priceEntryItem); 
    function check() {
        if (sumRight <= sumLeft) {
            console.log(`Left - ${sumLeft}`);
        } else {
            console.log((`Right - ${sumRight}`));
        } 
    }

    if (type === 'cheap') {  
        let filteredLeftArr = leftArr.filter(el => el < priceEntryItem);
        let sumLeft = filteredLeftArr.reduce((sum, el) => sum + el, 0);
        let filteredRightArr = items.filter(el => el < priceEntryItem);
        let sumRight = filteredRightArr.reduce((sum, el) => sum + el, 0);

        if (sumRight <= sumLeft) {
            console.log(`Left - ${sumLeft}`);
        } else {
            console.log((`Right - ${sumRight}`));
        } 
    } else if (type === 'expensive') {
        let filteredLeftArr = leftArr.filter(el => el >= priceEntryItem);
        let sumLeft = filteredLeftArr.reduce((sum, el) => sum + el, 0);
        let filteredRightArr = items.filter(el => el >= priceEntryItem);
        let sumRight = filteredRightArr.reduce((sum, el) => sum + el, 0);

        if (sumRight <= sumLeft) {
            console.log(`Left - ${sumLeft}`);
        } else {
            console.log((`Right - ${sumRight}`));
        }
    }
}

solve([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive")
    
    
    
    
    
    
    