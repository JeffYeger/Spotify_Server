const userModel = require('../model/user.model')


async function create(data){
    return await userModel.create(data)
}
async function read(filter = {}){
await userModel.find(filter)
}
async function readOne(filter = {}){
const result = await userModel.findOne(filter)
return result
}
async function readOneLogin(filter = {},proj){
const result = await userModel.findOne(filter,proj)
return result
}
async function update(filter,newData){
return await userModel.updateOne(filter,{newData})
}

async function updateAndReturn(filter, newData){
  let data = await userModel.findOneAndUpdate(filter,newData,{new:true})
  return  data
}
async function del(){
    return await userModel.updateOne()

}

module.exports={create,read,readOne,update,del,updateAndReturn,readOneLogin}