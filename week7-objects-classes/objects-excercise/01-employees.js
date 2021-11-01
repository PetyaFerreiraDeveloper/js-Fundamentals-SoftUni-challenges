function employee(arr) {
    class Employee {
        constructor(name, number) {
            this.name = name;
            this.number = number;
        }
    }
    let arrEmpl = [];
    for (let empl of arr) {
        let emplNum = empl.length;
        let employee = new Employee(empl, emplNum);
        arrEmpl.push(employee);
    }
    arrEmpl.forEach((emp) => console.log(`Name: ${emp.name} -- Personal Number: ${emp.number}`));
}

employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )