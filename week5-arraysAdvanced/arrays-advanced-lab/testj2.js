function findSchedule(input) {
    // the input is an array of strings - each string a line with course prerequisites
    let courses = [];
    let numCourses = input.shift();
    for (let line of input) {
        let lineArr = line.split(', ');
        let courseIndex = lineArr.shift();

        if(lineArr.length > 1) {
            lineArr.sort((a, b) => a - b);
        }

        for(let course of lineArr) {
            if (courses.indexOf(course) == -1) {
                courses.push(course)
            }
        }
        if (courses.indexOf(courseIndex) == -1) {
            courses.push(courseIndex)
        }
    }
    console.log(courses);
}

findSchedule(
    [
    '7',
    '1, 0',
    '2, 4',
    '5, 3',
    '3, 1, 2',
    '7, 6',
    '4, 1',
    '6, 3, 4, 5'
]
    )