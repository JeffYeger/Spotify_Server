const mongoose = require ('mongoose')

require ('./song.model')
require ('./user.model')

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
        
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
      },
      songs : [{
       
            type: mongoose.Schema.Types.ObjectId,
            ref: 'song',
            required: true
          } 
      ]
      
})

const playlistModel = mongoose.model("playlist",playlistSchema)

module.exports = playlistModel