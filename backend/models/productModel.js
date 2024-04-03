const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name:{ 
        type:String , 
        required:true 
    },
    slug:{
        type:String , 
      
    },
    price:{ 
        type:Number , 
        required:true 
    },
    category:{ 
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    description:{
        type:String , 
        required:true 
    },
    quantity:{ 
        type:Number , 
        required:true 
    } ,
    photo:{ 
        data:Buffer , 
        contentType:String 
    },
    shipping:{ 
        type:Boolean 
    }
},{timestamps:true})
const Product = mongoose.model('Product',productSchema)
module.exports= Product