const express = require('express')
const router = express.Router()

const {createProductController} = require('../controllers/productController')
const { requireSignIn,isAdmin } = require('../middleware/authMiddleware')
router.post('/createProduct',requireSignIn,isAdmin,createProductController)
module.exports = router 