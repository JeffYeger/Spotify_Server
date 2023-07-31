const jwt = require ('jsonwebtoken')
const SECRET=String(process.env.SECRET)

function createToken (data){
    return jwt.sign(data,SECRET,{expiresIn: "7d"})
}

function verify (req,res,next){
    try{
      
        const data = jwt.verify(req.headers.authorization.replace("Bearer ",""), process.env.SECRET)
        if(!data) throw 'Missing Data'
       
        req.id = data.user
        next()
    }
    catch(err){
        res.send(err)
    }
   
}

module.exports = {createToken,verify}