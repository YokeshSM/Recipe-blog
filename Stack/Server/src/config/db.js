import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config(); // Load environment variables

const connectDB = async () => {
    try {
        // console.log('MongoDB URI:', process.env.MONGODB_URI); // Debug line

        mongoose.connection.on('connected', () => {
            console.log('DB connected');
        });

        mongoose.connection.on('error', (err) => {
            console.error('DB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('DB disconnected');
        });

        await mongoose.connect("mongodb+srv://raja:Abcd21@recipie.if1zd.mongodb.net/?retryWrites=true&w=majority&appName=Recipie", {
           
        });

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); 
    }
};

export default connectDB;
