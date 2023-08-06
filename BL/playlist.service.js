const playlistController = require('../DL/controller/playlist.controller')
const songController = require('../DL/controller/song.controller')

async function addToPlaylist(userId, name, data) {
    if (!name) throw "Name required"
    let songExists = await songController.readOne({ id: data.id })
    if (!songExists) {
        songExists = await songController.create(data)
       

    }
    let playlist = await playlistController.readOne({ name: name, user: userId })
    if (!playlist) {
        playlist = await playlistController.create({ user: userId, name: name, songs: [songExists._id] })
        console.log ("added to new playlist")
    }
    if (playlist){
        playlist.songs.forEach((song)=> {
            if (song.id == songExists.id) throw "songs is already in playlist"
        })
        playlist.songs.push (songExists._id)
        playlist= await playlistController.updateAndReturn({name: name, user: userId},{songs:playlist.songs})
        console.log('added to existing playlist');
       
    }
    if (!data) throw "missing data"
    return playlist

}
async function getPlaylist(userId) {

    if (!userId) throw "missing user Id"
    let playlist = await playlistController.read({ user: userId, isActive:true })
    if (!playlist) throw "no playlist found"
    return playlist
}

async function getPlaylistSongs(userId,name){
    if (!userId) throw "missing user Id"
    if (!name) throw "missing name"
    let playlistSongs = await playlistController.read ({user: userId,name:name })
    if (!playlistSongs) throw "playlist songs not found"
    return playlistSongs
}

async function deletePlaylist (userId, name) {
    if (!userId) throw "missing user Id"
    if (!name) throw "missing name"

    let deletePlaylist = await playlistController.del({user: userId,name:name })
    if (!deletePlaylist) throw "couldn't find playlist to delete"
    return deletePlaylist
}
module.exports = { addToPlaylist, getPlaylist,getPlaylistSongs, deletePlaylist }