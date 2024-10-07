import mongoose from "mongoose";
const recipeSchema = new mongoose.Schema();
({
  name: { type: String, required: true },
  image: { type: String, required: false },
  ingredients: { type: Array, required: true },
  method: { type: String, required: true },
  prepTime: { type: String, required: true },
  servings: { type: String, required: true },
  like: { type: Number, required: true },
});
 const recipe =
  mongoose.model("recipe", recipeSchema);
  export default recipe
// export default {recipeModel}