const mongoose = require('mongoose')
require ('./song.model')
require ('./user.model')

const favoritesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
      },
      songs : [{
       
            type: mongoose.Schema.Types.ObjectId,
            ref: 'song',
            required: true,
          } 
          
        ],
        
        isActive: {
          type: Boolean,
          default: true
        }
      
})

const favoritesModel = mongoose.model("favorites",favoritesSchema)

module.exports = favoritesModel