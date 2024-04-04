const Product = require('../models/productModel.js'); // Assuming you have a Product model
const { uploadOnCloudinary } = require('../utils/cloudinary');
const fs = require('fs')
const slugify = require('slugify')
module.exports.createProductController = async (req, res) => {
    try {
        const {name,description,price,category,quantity,shipping} = req.fields   
        const {photo} = req.files
            if(!name||!category||!quantity||!description||!price)
            {
                return res.status(400).json({success:false,message:"Pls provide complete details"})
            }
             console.log(photo)
             if(!photo||photo.size<=0)
             { 
                 return res.status(400).json({success:false,message:"Pls provide image "})
                
             } 
          
             const newProduct = new Product({
                name,
                description,
                price,
                category,
                quantity,
                shipping,
                photo:  photo && photo.size > 0 ? { 
                    data: fs.readFileSync(photo.path), 
                    contentType: photo.type 
                } : null,
                slug: slugify(name)
            });
            console.log(newProduct)
            const savedProduct = await newProduct.save() 
            if(savedProduct)
            {
                res.status(200).json({success:true,message:"Successfully created Product",savedProduct})
            }
    } catch (err) {
      
        console.log(err);

       
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
module.exports.getProductsController = async(req,res)=>{ 
    try{
        const products = await Product.find({}).select("-photo").limit(12).sort({createdAt:-1}) 
            if (!products)
            {
            return res.status(400).json({success:false,message:"No products to show"})
            } 
            
        res.status(200).json(products)
    }
    catch(err)
    { 
        res.status(500).json({success:false,message:"Error in getting products"})
    }
}
module.exports.getProductController = async(req,res)=>{
 try{const {id} = req.params 
 const product = await Product.findById(id) 
 if(!product)
{ 
    return res.status(400).json({success:false,message:"Incoorect id "})

}
res.status(200).json({success:true,product})
}
catch(err)
{
 res.status(500).json({success:false,message:"Error while getting product",err})   
}
}
module.exports.getPhoto = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(400).json({ success: false, message: "Incorrect ID" });
        }

        if (!product.photo || !product.photo.data) {
            return res.status(400).json({ success: false, message: "No photo available for this product" });
        }

        res.set('Content-Type', product.photo.contentType);
        return res.status(200).send(product.photo.data);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Error while getting image", error: err });
    }
};
module.exports.deleteProductController=async(req,res)=>{
    try{
    const {id} = req.params 
    const deletedProduct = await Product.findByIdAndDelete(id) 
    if(!deletedProduct) 
        { 
        res.status(400).json({success:false,message:" Cannot Delete Product successfully"})

        }
    res.status(200).json({success:true,message:"Deleted Product successfully"})
}
catch(err)
{ 
    res.status(400).json({message:"Error deleting product"})
}}
module.exports.updateProductController = async(req,res)=>{
    try {
    const { name, description, price, category, quantity, shipping } =
    req.fields;
  const { photo } = req.files;
  //alidation
  switch (true) {
    case !name:
      return res.status(500).send({ error: "Name is Required" });
    case !description:
      return res.status(500).send({ error: "Description is Required" });
    case !price:
      return res.status(500).send({ error: "Price is Required" });
    case !category:
      return res.status(500).send({ error: "Category is Required" });
    case !quantity:
      return res.status(500).send({ error: "Quantity is Required" });
    case photo && photo.size > 1000000:
      return res
        .status(500)
        .send({ error: "photo is Required and should be less then 1mb" });
  }

  const products = await Product.findByIdAndUpdate(
    req.params.pid,
    { ...req.fields, slug: slugify(name) },
    { new: true }
  );
  if (photo) {
    products.photo.data = fs.readFileSync(photo.path);
    products.photo.contentType = photo.type;
  }
  await products.save();
  res.status(201).send({
    success: true,
    message: "Product Updated Successfully",
    products,
  });
} catch (error) {
  console.log(error);
  res.status(500).send({
    success: false,
    error,
    message: "Error in Updte product",
  });}}
  