function movies(arr) {
    // create an empty obj, to which to add the new properties
    // i need to loop through the array if i find addMovie, i need to add the movie to an obj
    // if i see directedBy inside the line, i need to split it, and check if the movie is already in the obj
    
    let movies = [];
    for (line of arr) {
        if (line.includes('addMovie')) {
            let name = line.split('addMovie ')[1];
            movies.push({name});
        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');
            let movie = movies.find((obj) => obj.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ');
            let movie = movies.find((obj) => obj.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }

    movies.forEach(movie => {
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')) {
            let finalList = JSON.stringify(movie);
            console.log(finalList);
        }
    })

}

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    
)