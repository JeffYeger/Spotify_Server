const playlistController = require('../DL/controller/playlist.controller')
const songController = require('../DL/controller/song.controller')

async function addToPlaylist(userId, name, data) {
    let songExists = await songController.readOne({ id: data.id })
    if (!songExists) {
        songExists = await songController.create(data)

    }
    let playlist = await playlistController.readOne({ name: name, user: userId })
    if (!playlist) {
        playlist = await playlistController.create({ user: userId, name: name, songs: [songExists._id] })
        console.log ("added to existing playlist")
    }
    if (playlist){
        playlist= await playlistController.updateAndReturn({name: name, user: userId},{songs:[songExists._id]})
        console.log('added to new playlist');
       
    }
    if (!data) throw "missing data"
    return playlist

}
async function getPlaylist(userId) {

    if (!userId) throw "missing user Id"
    let playlist = await playlistController.read({ user: userId })
    if (!playlist) throw "no playlist found"
    return playlist
}

module.exports = { addToPlaylist, getPlaylist }