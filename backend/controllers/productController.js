const Product = require('../models/Product'); // Assuming you have a Product model

module.exports.createProductController = async (req, res) => {
    try {
            const { name,slug,category,quantity,description, price } = req.body;

            if(!name||!slug||!category||!quantity||!description||!price)
            {
                return res.status(400).json({success:false,message:"Pls provide complete details"})
            } 
          
        const newProduct = new Product({
            name,
            description,
            price
        });

        
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
      
        console.log(err);

       
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
