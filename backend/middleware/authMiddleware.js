const jwt = require('jsonwebtoken')
module.exports.requireSignIn= async(req,res,next)=>{ 
try{
    const decode = jwt.verify(req.headers.authorization,process.env.SECRET) 
    req.user = decode 
    next()
}
catch(err)
{ 
    console.log(err)
}
}