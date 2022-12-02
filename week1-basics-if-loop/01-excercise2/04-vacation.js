function vacation(input) {
  let totalPrice = 0;
  let groupSize = Number(input[0]);
  let groupType = input[1];
  let dayWeek = input[2];
  if (groupType === "Business") {
    if (groupSize >= 100) {
      groupSize = 90;
    }
    switch (dayWeek) {
      case "Friday":
        totalPrice = groupSize * 10.9;
        break;
      case "Saturday":
        totalPrice = groupSize * 15.6;
        break;
      case "Sunday":
        totalPrice = groupSize * 16;
        break;
    }
  }
  if (groupType === "Students") {
    switch (dayWeek) {
      case "Friday":
        totalPrice = groupSize * 8.45;
        break;
      case "Saturday":
        totalPrice = groupSize * 9.8;
        break;
      case "Sunday":
        totalPrice = groupSize * 10.46;
        break;
    }
    if (groupSize >= 30) {
      totalPrice = totalPrice * 0.85;
    }
  }

  if (groupType === "Regular") {
    switch (dayWeek) {
      case "Friday":
        totalPrice = groupSize * 15;
        break;
      case "Saturday":
        totalPrice = groupSize * 20;
        break;
      case "Sunday":
        totalPrice = groupSize * 22.5;
        break;
    }
    if (groupSize >= 10 && groupSize <= 20) {
      totalPrice = totalPrice * 0.95;
    }
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation([40,
    "Regular",
    "Saturday"
    ]);
