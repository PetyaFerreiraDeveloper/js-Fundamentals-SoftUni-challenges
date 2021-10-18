function bonus(input) {
    let countStudents = Number(input.shift());
    let totalLectures = Number(input.shift());
    let initialBonus = Number(input.shift());
    let students = input.map(x => Number(x));
    let maxBonus = 0;
    let maxLectures = 0;
    
    for (let i = 0; i < countStudents; i++) {
        let studentAttendance = students[i];
        let currentStudentBonus = studentAttendance / totalLectures * (5 + initialBonus);
        if (currentStudentBonus > maxBonus) {
            maxBonus = currentStudentBonus;
            maxLectures = studentAttendance;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxLectures} lectures.`)
}

bonus([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  )