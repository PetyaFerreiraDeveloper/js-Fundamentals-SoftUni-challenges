function gram(band, album, song) {
    let songDuration = (album.length * band.length * song.length) / 2;
    let times = songDuration / 2.5;
    
    console.log(`The plate was rotated ${Math.ceil(times)} times.`)
}

gram('Rammstein', 'Sehnsucht', 'Engel')