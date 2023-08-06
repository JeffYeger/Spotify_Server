const playlistModel = require('../model/playlist.model')


async function create(data){
  
    return await playlistModel.create(data).populate("user songs")
}
async function read(filter = {}){
return await playlistModel.find(filter).populate("user songs")
}
async function readOne(filter = {}){
const result = await playlistModel.findOne(filter).populate("user songs")
return result
}
async function readOneLogin(filter = {},proj){
const result = await playlistModel.findOne(filter,proj).populate("user songs")
return result
}
async function update(filter,newData){
return await playlistModel.updateOne(filter,{newData}).populate("user songs")
}

async function updateAndReturn(filter, newData){
 
  let data = await playlistModel.findOneAndUpdate(filter,newData,{new:true}).populate("user songs")
  return  data
}
async function del(filter = {}){
    return await playlistModel.updateOne({filter, isActive: false}).populate("user songs")

}

module.exports={create,read,readOne,update,del,updateAndReturn,readOneLogin}