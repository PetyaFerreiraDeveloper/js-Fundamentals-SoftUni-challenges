function solve(country) {
    switch (country) {
        case 'England':
        case 'USA':
            console.log('English')
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            console.log('Spanish')
            break;
        default:
            console.log('unknown')
            break;
}
}

// solve('Germany')

function solveNew(country) {
    if (country === 'England' || country === 'USA') {
        console.log('English');
    } else if (country === 'Spain' || country === 'Argentina' || country === 'Mexico') {
        console.log('Spanish');
    } else {
        console.log('unknown')
    }
}

solveNew('USA')