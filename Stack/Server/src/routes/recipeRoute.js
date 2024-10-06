import express from "express";
import { listRecipes } from "../controller/recipeController.js";
const recipeRouter = express.Router();

recipeRouter.get("/list", listRecipes);

export { recipeRouter };
