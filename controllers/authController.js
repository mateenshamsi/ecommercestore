const { hashPassword } = require('../helper/authHelper');
const User = require('../models/userModel');

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
