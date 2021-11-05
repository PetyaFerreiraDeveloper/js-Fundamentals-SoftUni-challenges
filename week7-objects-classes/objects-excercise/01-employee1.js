function solve(arr) {
    let employee = {};
    for (let empName of arr) {
        let empNum = empName.length;
        employee[empName] = empNum;
    }
    
    for (let emp in employee) {
        console.log(`Name: ${emp} -- Personal Number: ${employee[emp]}`)
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )