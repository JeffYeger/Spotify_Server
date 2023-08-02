const express = require ('express')

const router = express.Router()

const playlistServices = require ('../BL/playlist.service')
const { verify } = require('../auth/auth')


router.post('/addToPlaylist', verify, async (req,res)=> {
    try {
        console.log ('add to playlist')
       
        const results = await playlistServices.addToPlaylist(req.id,req.body.name,req.body)
        res.send (results)
        
    } catch (error) {
        res.send (error).status(401)
    }
})

router.get('/getPlaylist', verify, async (req,res)=> {
    try {
       
        const results = await playlistServices.getPlaylist(req.id)
        res.send (results)
     
        
    } catch (error) {
        res.send (error).status(401)
    }
})
router.get('/showplaylistsongs/:name', verify, async (req,res)=> {
    try {
     
        const results = await playlistServices.getPlaylistSongs(req.id,req.params.name)

        res.send (results)
     
        
    } catch (error) {
        res.send (error).status(401)
    }
})

module.exports = router