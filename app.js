const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const  connectDB  = require('./db.js'); // Assuming connectDB is exported as a named function from db.js
const authRoutes = require('./routes/authRoute.js')
// Connect to the database
connectDB()
  .then(() => {
    console.log('MongoDB connected successfully');
    // Start the server after successful database connection
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
app.use('/api/v1/auth',authRoutes)
app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to the ecommerce app',
  });
});
