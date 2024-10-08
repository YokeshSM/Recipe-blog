import express from "express";
import RecipeModel from "../model/recipeModel.js"; // Corrected to RecipeModel
// const express=require("express")
// import { listRecipes } from "../controller/recipeController.js";
const recipeRouter = express.Router();
// const RecipeModel=require("../model/recipeModel")

recipeRouter.get("/list", async (req, res) => {
  try {
    const fetchRecipe = await RecipeModel.find(); // Corrected to fetchRecipe
    res.status(200).json(fetchRecipe);
  } catch (error) {
    res.status(400).json(error);
  }
});

recipeRouter.post("/add", async (req, res) => {
  try {
    const addRecipe = new RecipeModel(req.body); 
    const { name, image, ingredients, method, prepTime } = addRecipe;

    if (!name || !image || !ingredients || !method || !prepTime) {
      console.log("all fields require")
      return res.status(400).json({ message: "All fields are required." });
    }

    const saveRecipe = await addRecipe.save();
    res.status(201).json(saveRecipe);
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "An error occurred while saving the recipe.",
      error: error.message,
    });
  }
});

// Editing a recipe
recipeRouter.put("/edit/:id", async (req, res) => {
  try {
    const recipeId = req.params.id; 
    const currentRecipe = await RecipeModel.findOne({ _id: recipeId }); // Corrected to RecipeModel and currentRecipe
    if (!currentRecipe) {
      console.log(recipeId+" "+"not found")
      return res.status(400).json({ message: "Recipe not found" }); // Corrected to Recipe
    }
    const updateRecipe = await RecipeModel.findByIdAndUpdate( recipeId,req.body,
      { 
        new: true,
      }
    );
    res.status(200).json(updateRecipe);
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
});

recipeRouter.delete("/delete/:id", async (req, res) => {
  try {
    const recipeId = req.params.id; 
    const currentRecipe = await RecipeModel.findOne({ _id: recipeId }); 
    if (!currentRecipe) {
      return res.status(400).json({ message: "Recipe not found.." }); 
    }
    const deleteRecipe = await RecipeModel.findByIdAndDelete(recipeId); 
    res.status(200).json({ message: "Recipe Deleted..." }); 
  } catch (error) {
    console.log(error+" "+routes);
    res.status(400).json(error);
  }
});

export { recipeRouter };
