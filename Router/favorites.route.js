const express = require ('express')

const router = express.Router()

const favoritesServices = require ('../BL/favorites.service')
const { verify } = require('../auth/auth')


router.get('/getfavorites', verify, async (req,res)=> {
    try {

       
        const results = await favoritesServices.getFavorites(req.id)
        console.log ('got favorites')
        res.send (results)
        
        
    } catch (error) {
        res.send (error).status(401)
    }
})

module.exports = router