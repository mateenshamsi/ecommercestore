const mongoose = require('mongoose')

async function connectDB()
{
        try{
    
           
              const res = await mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`);
            console.log("Connected DB",res)
    } 
    catch(e)
    { 
        console.log(e)
        process.exit(1)
    }
}
module.exports = connectDB
 