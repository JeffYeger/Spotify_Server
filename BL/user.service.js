const userController = require ('../DL/controller/user.controller')
const bcrypt = require ('bcrypt')
const SALT_ROUNDS=Number(process.env.SALT_ROUNDS)
const auth = require ('../auth/auth')

async function getUser(filter,proj){
    let user = await userController.readOne(filter,proj)
    if (!user) throw("user not found")
    return user
}

async function register(data){
   const user = await userController.readOne({email:data.email})
   if (user) throw "user already exists"
   console.log (data.password)
    data.password = bcrypt.hashSync(data.password,SALT_ROUNDS)
if (String(data.password).length<6) throw "password must be at least 6 characters"
    let newUser = await userController.create(data)
    return newUser
}


async function login(data){
    if (!data.email || !data.password) throw "missing data"
let user = await userController.readOneLogin({email:data.email},"+password")
    if (!user) throw "user doesn't exist";
    if (!bcrypt.compareSync(data.password /*from user*/,user.password /*from db*/)) throw "password incorrect"
    user = await userController.updateAndReturn({email:user.email},{lastConnectedDate: new Date()})
    const token = await auth.createToken({user:user._id})
    // console.log (token)
    return {user,token}
}


module.exports = {getUser,register,login}