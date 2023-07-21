
require("dotenv").config()
require('./DL/db').connect()

const 
express = require('express'),
app = express(),
PORT = 1001,
cors = require('cors');

app.use(express.json())
app.use(cors())

app.use ('/user',require('./Router/user.route'))
app.use ('/song',require('./Router/song.route'))
app.use ('/favorites', require ('./Router/favorites.route'))
app.use ('/playlist', require ('./Router/playlist.route'))

app.listen(PORT,()=>{
    console.log("Server is up 🖥️");
})

