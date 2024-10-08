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

// Adding a new recipe
recipeRouter.post("/add", async (req, res) => {
  try {
    const addRecipe = new RecipeModel(req.body); // Corrected to RecipeModel
    const { name, image, ingredients, method, prepTime } = addRecipe;

    console.log(
      "name: " +
        name +
        "  ingredients :" +
        ingredients +
        " method: " +
        method +
        "prepTime: " +
        prepTime
    );
    if (!name || !ingredients || !method || !prepTime) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const saveRecipe = await addRecipe.save(); // Corrected to saveRecipe
    res.status(201).json(saveRecipe);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while saving the recipe.",
      error: error.message,
    });
  }
});

// Editing a recipe
recipeRouter.put("/edit/:id", async (req, res) => {
  try {
    const recipeId = req.params.id; // Corrected to recipeId
    const currentRecipe = await RecipeModel.findOne({ _id: recipeId }); // Corrected to RecipeModel and currentRecipe
    if (!currentRecipe) {
      return res.status(400).json({ message: "Recipe not found" }); // Corrected to Recipe
    }
    const updateRecipe = await RecipeModel.findByIdAndUpdate(
      recipeId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateRecipe);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Deleting a recipe
recipeRouter.delete("/delete/:id", async (req, res) => {
  try {
    const recipeId = req.params.id; // Corrected to recipeId
    const currentRecipe = await RecipeModel.findOne({ _id: recipeId }); // Corrected to RecipeModel and currentRecipe
    if (!currentRecipe) {
      return res.status(400).json({ message: "Recipe not found.." }); // Corrected to Recipe
    }
    const deleteRecipe = await RecipeModel.findByIdAndDelete(recipeId); // Corrected to findByIdAndDelete
    res.status(200).json({ message: "Recipe Deleted..." }); // Corrected to Recipe
  } catch (error) {
    res.status(400).json(error);
  }
});

export { recipeRouter };
