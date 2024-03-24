const bcrypt = require('bcrypt')
module.exports.hashPassword = async(password)=>{
    try{ 

        const hashedPassword = await bcrypt.hash(password,10) 
        return hashedPassword
    }
    catch(err){
        console.log(err)
    }
}
module.exports.comparePassword = async(password,hashedPassword)=>{
    try{ 

      return  bcrypt.compare(password,hashedPassword) 
    }
    catch(err){
        console.log(err)
    }
}
