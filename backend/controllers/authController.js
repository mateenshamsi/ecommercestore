const { hashPassword, comparePassword } = require('../helper/authHelper');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken')
module.exports.registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).send({ error: "Please fill all details correctly" });
        }
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(200).send({ success: true, message: "User already exists" });
        }
        const hashedPassword = await hashPassword(password);
        const user = new User({ name, email, password: hashedPassword }); // Corrected user creation
        await user.save();
        res.status(200).json({
            success: true,
            message: "User registered successfully",
            user
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error in registering user" });
    }
};

module.exports.loginController = async(req,res)=>{ 
    
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(404).json({ success: false, message: "Invalid Credentials" });
            }
    
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ success: false, message: "User not found" });
            }
    
            const match = await comparePassword(password, user.password); 
    
            if (!match) {
                return res.status(400).json({ success: false, message: "Invalid Password" });
            }
    
            const token = await jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: '7d' });
            res.status(200).json({
                success: true,
                message: "Login Successful",
                user: {
                    name: user.name,
                    email: user.email,
                    role:user.role
                },
                token
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false, message: "Login Failed", error: err.message });
        }
    }
module.exports.isAdmin = async(req,res,next)=>{ 
    try{ 
        const {id} = req.user
        const user = await User.findById({id})
        if(user.role!==1)
        {
            return res.status(400).send({
                success:false , 
                message:"Unauthorized Access" 
            })
        }
        
        else
        { 
            next()
        }
    }
    catch(err)
    { 
       console.log(err)
       res.status(400).json({success:false,message:"Error in admin middleware",err})  
    }
}

