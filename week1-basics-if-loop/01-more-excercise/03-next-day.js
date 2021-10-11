function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    let oneDay = 24 * 60 * 60 * 1000 // calculate the milliseconds in one day
    let nextDate = new Date(date.getTime() + oneDay); // getTime() returns the day in ms
    let printYear = nextDate.getFullYear(); 
    let printMonth = nextDate.getMonth() + 1;
    let printDate = nextDate.getDate();
    console.log(`${printYear}-${printMonth}-${printDate}`)
}

nextDay(2016, 9, 30)