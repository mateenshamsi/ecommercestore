const mongoose = require('mongoose');
const url = process.env.MONGODB_URI 
const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log(`Connected to MongoDB `);
    } catch (err) {
        console.error(`Error connecting to db `, err.message);
    }
};

module.exports = connectDB;
 