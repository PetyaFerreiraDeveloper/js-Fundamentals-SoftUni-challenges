function distance(x1, y1, x2, y2) {
    let xDiff = Math.abs(x2 - x1);
    let yDiff = Math.abs(y2 - y1);
    let result = Math.sqrt(xDiff * xDiff + yDiff* yDiff)
    console.log(result)
}

distance(2.34, 15.66, -13.55, -2.9985)