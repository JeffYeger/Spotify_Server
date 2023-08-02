const express = require ('express')

const router = express.Router()

const songServices = require ('../BL/song.service')

const favoritesServices = require ('../BL/favorites.service')
const { verify } = require('../auth/auth')

router.post ('/savesong',  async (req,res)=>{
    try {
        console.log ('got to saved song')
        const results = await songServices.savesong(req.body)
        res.send(results)
       
    }
    catch(err){
        res.status(401).send(err)
    }
})

router.post ('/addfavorite', verify, async (req,res)=> {
    try{
        // TODO - check
       
        const results = await favoritesServices.addToFavorites(req.id,req.body)
        res.send (results)
    }
    catch (err){
        res.status(401).send (err)
    }
})

module.exports = router