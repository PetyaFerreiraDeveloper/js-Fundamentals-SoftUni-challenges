function createSong(input) {
    class Song {
        constructor(playlist, name, time) {
            this.playlist = playlist,
            this.name = name,
            this.time = time,
            this.print = () => console.log(this.name);
        }
    }

    let numberOfSongs = input.shift();
    let desiredPlaylist = input.pop();
    let songs = [];

    for (let i = 0; i < numberOfSongs; i++) {
        let currentInput = input[i];
        let currentArray = currentInput.split('_');
        let currentSong = new Song(currentArray[0], currentArray[1], currentArray[2]);
        songs.push(currentSong);
    }

    if (desiredPlaylist === 'all') {
        songs.forEach(song => song.print())
    } else {
        let filteredSongs = songs.filter(song => song.playlist === desiredPlaylist);
        filteredSongs.forEach(s => s.print())

        // songs
        //     .filter();
        //     .forEach()
    }


}

createSong([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
    
    )