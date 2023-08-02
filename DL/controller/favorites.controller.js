const favoritesModel = require('../model/favorites.model')


async function create(data){

    return await favoritesModel.create(data).populate("user songs")
}
async function read(filter = {}){
return await favoritesModel.find(filter).populate("user songs")
}
async function readOne(filter = {}){
const result = await favoritesModel.findOne(filter).populate("user songs")
return result
}
async function readOneLogin(filter = {},proj){
const result = await favoritesModel.findOne(filter,proj).populate("user songs")
return result
}
async function update(filter,newData){
return await favoritesModel.updateOne(filter,{newData}).populate("user songs")
}

async function updateAndReturn(filter, newData){
  let data = await favoritesModel.findOneAndUpdate(filter,newData,{new:true}).populate("user songs")
  return  data
}
async function del(){
    return await favoritesModel.updateOne().populate("user songs")

}

module.exports={create,read,readOne,update,del,updateAndReturn,readOneLogin}