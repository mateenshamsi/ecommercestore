const express = require('express');
const router = express.Router(); // Capitalize 'Router'
const { registerController,loginController } = require('../controllers/authController.js'); // Corrected path for controller import
const {requireSignIn,isAdmin} = require('../middleware/authMiddleware.js')

router.post('/register', registerController);
 
router.post('/login',loginController)
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    return res.status(200).send({ok:true})
})
module.exports = router;

