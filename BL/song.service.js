const songController = require ('../DL/controller/song.controller')

// // async function savesong(data){
// //     const song = await songController.create(data)
// //     if (!data) throw "missing data"
// //     return song

// // }

async function removeSong (songId) {
    if (!songId) throw "missing song Id"
    let song = await songController.del ({id:songId})
    if (!song) throw "couldn't find song"
    return song
}


module.exports = {removeSong}