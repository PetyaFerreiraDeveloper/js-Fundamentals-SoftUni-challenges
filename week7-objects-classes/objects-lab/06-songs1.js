function song(arr) {
    let numSongs = arr.shift();
    let checkAlbum = arr.pop();

    class Song {
        constructor(playList, name, time) {
            this.playList = playList;
            this.name = name;
            this.time = time;
        }
    }
    for (let el of arr) {
        let currentArray = el.split('_');
        let playList = currentArray[0];
        let name = currentArray[1];
        let time = currentArray[2];

        if(checkAlbum === 'all') {
            console.log(name);
        } else if(checkAlbum === playList) {
            console.log(name);
        }
    }
}

song([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']    
    )