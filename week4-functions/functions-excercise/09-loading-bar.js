function load(num) {
    let newStatus = printStatus(num);
    let line = `${num}% ${newStatus}`

    if (num < 100) {
        console.log(`${line}`)
        console.log('Still loading...')
    } else {
        console.log('100% Complete!')
        printStatus(num);
    }

    function printStatus(number) {
        let percentStatus = '%'.repeat(number / 10);
        let leftStatus = '.'.repeat((100 - number) / 10);
        let status = `[${percentStatus}${leftStatus}]`
        return status
    }
}

load(30)