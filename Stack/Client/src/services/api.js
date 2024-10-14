import axios from "axios";

const SERVER_API = import.meta.env.VITE_API;
//
// const getrecipes = () => axios.get(`${MOCK_API}/recipe`);
const getrecipes = () => axios.get(`${SERVER_API}recipe/list`);
const getRecipeId=()=>axios.get(`${SERVER_API}/recipe${id}`)
const addRecipe=(Recipedata)=>axios.post(`${SERVER_API}recipe/add`,Recipedata)
const editRecipe=(id,Recipedata)=>axios.put(`${SERVER_API}recipe/edit/${id}`,Recipedata)
const deleteRecipe=(id)=>axios.delete(`${SERVER_API}recipe/delete/${id}`)
export { getrecipes,getRecipeId,addRecipe,editRecipe,deleteRecipe };
