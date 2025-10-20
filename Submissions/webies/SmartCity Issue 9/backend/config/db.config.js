const mongoose = require("mongoose");

module.exports = async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected");
    } catch (err) {
        console.error(`MongoDB connection error: ${err}`);
    }
}