const favoritesController = require ('../DL/controller/favorites.controller')
const songController = require ('../DL/controller/song.controller')

async function addToFavorites(userId,data){
   let songExists = await songController.readOne({id:data.id})
   if (!songExists) {
songExists =  await songController.create(data)

   }
    const favorites = await favoritesController.create({user:  userId, songs: [songExists._id]})
    if (!data) throw "missing data"
    return favorites

}
async function getFavorites(userId){

    if (!userId) throw "missing user Id"
    let favorites = await favoritesController.read({user:userId})
    if (!favorites) throw "no favorites found"
    return favorites
}

module.exports = {addToFavorites, getFavorites}