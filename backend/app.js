const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const  connectDB  = require('./db.js');
const authRoutes = require('./routes/authRoute.js')
const categoryRoute = require('./routes/categoryRoute')
const productRoutes = require('./routes/productRoute.js')
const cors = require('cors')
connectDB()
  .then(() => {
    console.log('MongoDB connected successfully');
   
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Define routes and middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors())
app.use('/api/auth',authRoutes)
app.use('/api/category',categoryRoute)
app.use('/api/products',productRoutes)
app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to the ecommerce app',
  });
});
