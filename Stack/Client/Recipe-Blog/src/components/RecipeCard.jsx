import { Heart } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Pencil } from 'lucide-react'

const RecipeCard = ({ recipe }) => {
    const [liked, setLiked] = useState(false); 
    const [likes, setLikes] = useState(0); // State to track number of likes
  
    const handleLike = () => {
      setLikes(prevLikes => prevLikes + 1); 
      setLiked(true)// Increment the like count based on previous state
    };
  
    return (
      <div className="flex flex-row max-w-full w-full md:w-96 h-auto rounded-lg overflow-hidden shadow-lg p-4 m-4 bg-white">
        {/* Image section */}
        <div className="w-2/3 h-[50%]"> {/* Set fixed height for rectangular shape */}
          <img
            className="w-[100%] h-[200%] object-cover rounded-lg"
            src={recipe.image}
            alt={recipe.name}
          />
        </div>
  
        {/* Content section */}
        <div className="flex flex-col justify-between w-2/3 pl-4">
          <h2 className="text-xl font-bold mb-2 text-gray-800">{recipe.name}</h2>
          <p className="text-gray-600 text-sm font-bold">Prep Time: {recipe.prepTime}</p>
          <p className="text-gray-600 text-sm mb-4 font-bold">Servings: {recipe.servings}</p>
  
          <h4 className="text-md font-extrabold text-gray-600">Ingredients:</h4>
          {/* Horizontal ingredient list */}
          <ul className="flex flex-wrap space-x-2 text-gray-700 mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="whitespace-nowrap">{ingredient}</li>
            ))}
          </ul>
  
          <h4 className="text-md text-gray-600 font-extrabold">Method:</h4>
          <p className="text-gray-700">{recipe.method}</p>
  
          {/* Like button */}
          <div className="flex justify-between">
          <div className="flex items-center mt-4">
            <button
              onClick={handleLike}
              className="flex items-center focus:outline-none"
            >
             <Heart className={`w-6 h-6 mr-2 ${liked ? 'text-red-500' : 'text-gray-400'}`}/>
              <span className="text-gray-700">{recipe.like}</span>
            </button>
          </div>
  
  
          {/* Edit button */}
          <div className="flex items-center mt-4">
            <button className="flex items-center focus:outline-none">
              <Pencil className="text-gray-600 w-4 h-4 mr-2" />
              <span className="text-gray-700">Edit</span>
            </button>
          </div>
          </div>
        </div>
      </div>
    );
  };
  export default RecipeCard