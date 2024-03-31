const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name:{ 
        type:String , 
        required:true 
    },
    slug:{
        type:String , 
        required:true ,
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
    // photo:{ 
    //     type:String , 
       
    // },
    shipping:{ 
        type:Boolean 
    }
},{timestamps:true})
const Products = new mongoose.Schema('Products',productSchema)