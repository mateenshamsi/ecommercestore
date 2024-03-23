import express from 'express' 
const router = express.router()
import {registerController} from '../controllers/authController.js'
//REGISTER ROUTE 
router.post('/register',registerController)
export default router 