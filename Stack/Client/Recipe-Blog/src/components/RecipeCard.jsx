import { Heart } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Pencil } from 'lucide-react'

const RecipeCard = ({ recipe }) => {
    const [liked, setLiked] = useState(false); 
    const [likes, setLikes] = useState(0); 
    const [visible, setVisible] = useState(false);
    const [nameState,setName]=useState(recipe.name)
    const [imageState,setImagee]=useState(recipe.image)
    const[servingState,setServing]=useState(recipe.servings)
    const [prepTimeState,setPrepTime]=useState(recipe.prepTime)
    const [ingredientState,setIngredient]=useState(recipe.ingredients)
    const[methodState,setMethod]=useState(recipe.method)
  
    const handleLike = (id) => {
      try {
        const response = await (id);
        console.log(response.status);
        if (response.status === 200) {
          console.log("Deleted");
          fetchprojects()
        }
        fetchprojects();
      } catch (error) {
        window.alert(error);
        console.log("error");
      }
      
    };
  const handleEdit=(e)=>{
    e.preventDefault();
    const recipeData={
      name:nameState,
      image:imageState,
      serving:servingState,
      prepTime:prepTimeState,
      method:methodState,
      
    }

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
              onClick={()=>{handleLike(id)}}
              className="flex items-center focus:outline-none"
            >
             
             <Heart className={`w-6 h-6 mr-2 ${liked ? 'text-red-500' : 'text-gray-400'}`}/>
              <span className="text-gray-700">{recipe.like}</span>
            </button>
          </div>
  
  
          <div className="flex items-center mt-4">
            <button className="flex items-center focus:outline-none">
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
                <input type="text" value={nameState} onChange={(e) => setTitleState(e.target.value)} placeholder="Title" className="p-2 border rounded" required />
                <input type="text" value={imageState} onChange={(e) => setDescState(e.target.value)} placeholder="Description" className="p-2 border rounded" required />
                <input type="text" value={prepTimeState} onChange={(e) => setLinkState(e.target.value)} placeholder="Project Link" className="p-2 border rounded" required />
                <input type="text" value={servingState} onChange={(e) => setImageState(e.target.value)} placeholder="Image URL" className="p-2 border rounded" required />
                <input type="text" value={ingredientState} onChange={(e) => setGitState(e.target.value)} placeholder="Git" className="p-2 border rounded" required />
                <input type="text" value={methodState} onChange={(e) => setGitState(e.target.value)} placeholder="Git" className="p-2 border rounded" required />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Update Project</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };
  export default RecipeCard