const Category = require('../models/categoryModel');
const slugify = require('slugify');

module.exports.createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(401).json({
                success: false,
                message: "Name is required"
            });
        }

        const existingCategory = await Category.find({ name });
        if (existingCategory.length > 0) {
            return res.status(404).json({ message: "Category already exists" });
        } else {
            const category = await new Category({ name, slug: slugify(name) }).save();
            res.status(200).json({ message:"Catefory Created" , category });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, err, message: "Error creating category" });
    }
};
module.exports.updateCategoryController = async(req,res)=>{
    try {
        const { name } = req.body;
        const { id } = req.params;

       

        const category = await Category.findByIdAndUpdate(
            id,
            { name, slug: slugify(name) },
            { new: true }
        );

               if (!category) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        res.status(200).json({ success: true, message: "Updated category", category });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Error updating category" });
    }
};
module.exports.getCategoryController=async(req,res)=>{
    try{ 
        const category = await Category.find({})
        res.status(200).json({success:false,message:"All categories",category})
    }   
    catch(err)
    { 
        res.status(400).json({success:false,message:"Cannot get categories",})
    }
} 
module.exports.getCategory = async(req,res)=>{ 
    try{ 
       const {id} = req.params 
       const category = await Category.findById(id)
       if(category) 
       { 
        return res.status(200).json({success:true,category})
       }
    }
    catch(err)
    { 
        res.status(500).json({success:false,message:"Error in getting single category"})
    }
}
module.exports.deleteCategory = async(req,res)=>{ 
    try{ 
       const {id} = req.params 
       const category = await Category.findByIdAndDelete(id)
       if(!category) 
       { 
        return res.status(400).json({success:false,meessage:"Cannot find category"})
       }
       else
       return res.status(200).json({success:true,meessage:"Deleted   category successfully"})

    }
    catch(err)
    { 
        res.status(500).json({success:false,message:"Error in getting single category"})
    }
}
