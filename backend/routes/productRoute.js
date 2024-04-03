const express = require('express')
const router = express.Router()
const {upload} = require('../middleware/multer.js')
const formidable = require('express-formidable')
const {createProductController,updateProductController,deleteProductController,getPhoto,getProductsController,getProductController} = require('../controllers/productController')
const { requireSignIn,isAdmin } = require('../middleware/authMiddleware')
router.post('/createProduct',
requireSignIn,isAdmin,
    formidable(), 
    createProductController)
router.get('/getProducts',getProductsController) 
router.get('/getProduct/:id',getProductController) 
router.get('/getProductPhoto/:id',getPhoto)
router.delete('/deleteProduct/:id',requireSignIn,isAdmin, deleteProductController)
router.post('/updateProduct/:id',
requireSignIn,isAdmin,
    formidable(), 
    updateProductController)

module.exports = router 