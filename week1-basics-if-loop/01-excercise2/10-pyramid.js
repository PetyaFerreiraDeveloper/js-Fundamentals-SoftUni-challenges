function pyramid(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;
  let height = Math.floor((base + 1) / 2);
  if (base % 2 === 0) {
    gold = 4 * increment;
  } else {
    gold = increment;
  }

  let currFloorBase = base;
  for (let i = 1; i <= height; i++) {
    if (i % 5 === 0) {
      lapis += (currFloorBase * 4 - 4) * increment;
    } else {
      marble += (currFloorBase * 4 - 4) * increment;
    }

    stone += (currFloorBase - 2) * (currFloorBase - 2) * increment;

    // if (i === height) {
    //     if(base % 2 !== 0) {
    //      stone -= 1;
    //     }
    // }
    
    currFloorBase -= 2;
  }

  console.log(Math.round(stone));
  console.log(stone);
  console.log(Math.round(marble));
  console.log(Math.round(lapis));
  console.log(Math.round(gold));
}

pyramid(11, 0.75);
