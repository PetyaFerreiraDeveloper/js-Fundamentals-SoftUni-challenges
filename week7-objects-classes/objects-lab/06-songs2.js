function song(arr) {
    let numSongs = arr.shift();
    let checkPlaylist = arr.pop();
    let songsArr = [];
    class Song {
        constructor(playlist, name, time) {
            this.playlist = playlist;
            this.name = name;
            this.time = time;
        }
    }
    for (el of arr) {
        let [playlist, name, time] = el.split('_');
        let song = new Song(playlist, name, time);
        songsArr.push(song);
    }
    
    if (checkPlaylist === 'all') {
        songsArr.forEach((song) => console.log(song.name));
    } else {
        let filtered = songsArr.filter((song) => song.playlist === checkPlaylist);
        filtered.forEach((song) => console.log(song.name));
    }
}
song([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    
    )