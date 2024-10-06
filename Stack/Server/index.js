import express from "express";
import "dotenv/config";
import { recipeRouter } from "../Server/src/routes/recipeRoute.js";

const app = express();
const port = process.env.port || 4000;
app.use(express.json());
app.listen(port, () => console.log(`server started on ${port}`));

app.use("/api/recipe", recipeRouter);
app.get("/", (req, res) => res.send("API working"));
