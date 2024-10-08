import { Heart, Trash ,MessageCircleWarning} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Pencil } from 'lucide-react'
import {toast} from 'react-toastify'
import { deleteRecipe, editRecipe } from '../services/api';

const RecipeCard = ({ recipe ,fetchrecipes}) => {
    const [liked, setLiked] = useState(false); 
    const [likes, setLikes] = useState(0); 
    const [visible, setVisible] = useState(false);
    const [nameState,setName]=useState(recipe.name)
    const [imageState,setImagee]=useState(recipe.image)
    const[servingState,setServing]=useState(recipe.servings)
    const [prepTimeState,setPrepTime]=useState(recipe.prepTime)
    const [ingredientState,setIngredient]=useState(recipe.ingredients)
    const[methodState,setMethod]=useState(recipe.method)
  
    const handleLike = () => {
      setLiked(!liked)
      setLikes(!liked? likes +1 : likes -1); 
    };
    const handleDelete=async()=>{
      try {
        const response=await deleteRecipe(recipe._id)
        console.log(response)
        if(response.status===200){
          toast('Project deleted!', {
            className: 'bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
            icon: <Trash />,
          }
        );
        fetchrecipes()

        }        
      } catch (error) {
        console.log(error.message)
        toast('Error: ' + error.message, {
          className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
          icon: <MessageCircleWarning />,
        });
        
      }
      // fetchrecipes();
    
    }
  const handleEdit= async(e)=>{
    e.preventDefault();
    const recipeData={
      name:nameState,
      image:imageState,
      servings:servingState,
      prepTime:prepTimeState,
      method:methodState,
      ingredients:ingredientState
    };
    try {
      console.log(recipe._id)
      const response=await editRecipe(recipe._id,recipeData)
      if (response.status === 200) {
        console.log('finish')
        toast('Project edited!', {
          className: 'bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
          icon: <Trash />,
        });
        fetchrecipes()
      }
    } catch (error) {
      console.log(error)
      
    }
    setVisible(false)
    // fetchrecipes()

    useEffect(()=>{
  fetchrecipes();
    },[])
  }
    return (
      <div className="flex flex-row max-w-full w-full md:w-96 h-auto rounded-lg overflow-hidden shadow-lg p-4 m-4 bg-white">
    
        <div className="w-2/3 h-[50%]">
          <img
            className="w-[100%] h-[200%] object-cover rounded-lg"
            src={recipe.image}
            alt={recipe.name}
          />
        </div>

        <div className="flex flex-col justify-between w-2/3 pl-4">
          <h2 className="text-xl font-bold mb-2 text-gray-800">{recipe.name}</h2>
          <p className="text-gray-600 text-sm font-bold">Prep Time: {recipe.prepTime}</p>
          <p className="text-gray-600 text-sm mb-4 font-bold">Servings: {recipe.servings}</p>
  
          <h4 className="text-md font-extrabold text-gray-600">Ingredients:</h4>

          <ul className="flex flex-wrap space-x-2 text-gray-700 mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="whitespace-nowrap">{ingredient}</li>
            ))}
          </ul>
          <h4 className="text-md text-gray-600 font-extrabold">Method:</h4>
          <p className="text-gray-700">{recipe.method}</p>
  
          <div className="flex justify-between">
          <div className="flex items-center mt-4">
            <button
              onClick={handleLike }
              className="flex items-center focus:outline-none"
            >
             
             <Heart className={`w-6 h-6 mr-2 ${liked ? 'text-red-500' : 'text-gray-400'}`}/>
              <span className="text-gray-700">{likes}</span>
            </button>
          </div>
  
  
          <div className="flex items-center mt-4">
            <button className="flex items-center focus:outline-none">
            <Trash className='text-red-500 mr-2' onClick={handleDelete}/>
              <Pencil className="text-gray-600 w-4 h-4 mr-2" onClick={()=>setVisible(true)} />
              <span className="text-gray-700">Edit</span>
            </button>
          </div>
          </div>
        </div>

        {visible && (
          <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
              <div className="flex justify-between items-center p-4 border-b text-blue-500 font-bold">
                <span>Edit Project</span>
                <button onClick={() => setVisible(false)} className="text-gray-500 hover:text-gray-700">Close</button>
              </div>
              <form className="p-4 flex flex-col gap-4" onSubmit={handleEdit}>
                <input type="text" value={nameState} onChange={(e) => setName(e.target.value)} placeholder="Recipe name" className="p-2 border rounded" required />
                <input type="text" value={imageState} onChange={(e) => setImagee(e.target.value)} placeholder="Image url" className="p-2 border rounded" required />
                <input type="text" value={prepTimeState} onChange={(e) => setPrepTime(e.target.value)} placeholder="PrepTime" className="p-2 border rounded" required />
                <input type="text" value={servingState} onChange={(e) => setServing(e.target.value)} placeholder="serving" className="p-2 border rounded" required />
                <input type="text" value={ingredientState} onChange={(e) => setIngredient(e.target.value)} placeholder="ingredient" className="p-2 border rounded" required />
                <input type="text" value={methodState} onChange={(e) => setMethod(e.target.value)} placeholder="method" className="p-2 border rounded" required />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Update Project</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };
  export default RecipeCard