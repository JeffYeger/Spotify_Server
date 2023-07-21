const mongoose = require('mongoose')
require ('./song.model')
require ('./user.model')

const favoritesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Assuming your user model is named 'User'
        required: true
      },
      songs : [{
       
            type: mongoose.Schema.Types.ObjectId,
            ref: 'song', // Assuming your song model is named 'Song'
            required: true
          } 
      ]
      
})

const favoritesModel = mongoose.model("favorites",favoritesSchema)

module.exports = favoritesModel