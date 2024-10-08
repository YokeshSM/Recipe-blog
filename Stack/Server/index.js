import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { recipeRouter } from "./src/routes/recipeRoute.js"; // Adjusted path
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routes/AuthRoute.js";

const app = express();
app.use(cors());
const port = process.env.PORT || 4000;

// Connect to the database
connectDB();

app.use(express.json());

// Define routes
app.use("/recipe", recipeRouter);
app.use("/auth", AuthRouter);
app.get("/", (req, res) => res.send("API working"));

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`)); // Fixed interpolation
