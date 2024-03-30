const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
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
module.exports.isAdmin=async(req,res,next)=>{
    try{
        const user = await User.findById(req.user._id)
        if(user.role!=1)
        {
            return res.status(401).json({success:false,message:"Unauthorized"})
        }
        else
        {
            next()
        }
    }
    catch(err){
        res.status(400).json({success:false,message:"Error in middleware"})
    }
}