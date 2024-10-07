import express from "express";
// import { listRecipes } from "../controller/recipeController.js";
const recipeRouter = express.Router();
const RecipieModel=require("../model/recipeModel")

recipeRouter.get("/list", async(req,res)=>{
    try {
        const fetchRecipie=await RecipieModel.find()
        res.status(200).json(fetchRecipie);
        
    } catch (error) {
        res.status(400).json(error)
        
    }
});
recipeRouter.post('/add',async(req,res)=>{
  try {
    const addRecipie=new RecipieModel(req.body);
    const {name,image,ingredients,method,prepTime}=addRecipie;
    if(!name||!image||!ingredients||!method||!prepTime)
    {
        res.status(400).json({message:"Something is missing.."})
    }
    const saveRecipie=await addRecipie.save();
    res.status(200).json(saveRecipie);
  } catch (error) {
    res.status(400).json({message:error})
    
  }
})

recipeRouter.put("/edit/:id",async(req,res)=>{
    try {
        const recipieId=req.params.id
        const currentRecipie=await RecipieModel.findOne({_id:recipieId});
        if(!currentRecipie)
        {
            res.status(400).json({message:"Recipie not found"});
        }
        const updateRecipie=await RecipieModel.findByIdAndUpdate(recipieId,req.body,{
            new:true
        })
        res.status(200).json(updateRecipie)
    } catch (error) {
        res.status(400).json(error);
        
    }
})
recipeRouter.delet("/delete/:id",async(req,res)=>{
    try {
        const recipieId=req.params.recipieId
        const currentRecipie=await RecipieModel.findOne({_id:recipieId})
        if(!currentRecipie)
        {
            res.status(400).json({message:"Recipie Not found.."})
        }
        const deleteRecipie=await RecipieModel.findByIdAndDelet(recipieId)
        res.status(200).json({message:"Recipie Deleted..."})
        
    } catch (error) {
        res.status(400).json(error)
        
    }
})

export { recipeRouter };
