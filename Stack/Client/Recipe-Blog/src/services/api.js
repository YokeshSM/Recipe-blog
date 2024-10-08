import axios from "axios";

const MOCK_API = "https://670192a4b52042b542d81c12.mockapi.io";

const SERVER_API = "http://localhost:4000/";
//
// const getrecipes = () => axios.get(`${MOCK_API}/recipe`);
const getrecipes = () => axios.get(`${SERVER_API}recipe/list`);
const getRecipeId=()=>axios.get(`${api}/projects${id}`)
const addRecipe=(projectdata)=>axios.post(`${api}/projects/add`,projectdata)
const editRecipe=(id,projectdata)=>axios.post(`${api}/projects/edit/${id}`,projectdata)
const deleteRecipe=(id)=>axios.delete(`${api}/projects/delete/${id}`)
export { getrecipes };
