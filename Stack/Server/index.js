import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { recipeRouter } from './src/routes/recipeRoute.js'; // Adjusted path
import connectDB from './src/config/db.js';

const app = express();
const port = process.env.PORT || 4000;

// Connect to the database
connectDB();

app.use(express.json());

// Define routes
app.use('/recipe', recipeRouter);
app.get('/', (req, res) => res.send('API working'));

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`)); // Fixed interpolation
