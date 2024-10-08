import { Heart } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { getrecipes } from '../services/api'; // Make sure this API service is working
import { Pencil } from 'lucide-react'
import { CirclePlus } from 'lucide-react';

// RecipeCard Component


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
        <p className="text-gray-600 text-sm">Prep Time: {recipe.prepTime}</p>
        <p className="text-gray-600 text-sm mb-4">Servings: {recipe.servings}</p>

        <h4 className="text-md font-semibold text-gray-600">Ingredients:</h4>
        {/* Horizontal ingredient list */}
        <ul className="flex flex-wrap space-x-2 text-gray-700 mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="whitespace-nowrap">{ingredient}</li>
          ))}
        </ul>

        <h4 className="text-md font-semibold text-gray-600">Method:</h4>
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


// RecipePage Component
const RecipePage = () => {
  const [recipedata, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetching recipes from the API
  const fetchrecipes = async () => {
    try {
      const { data } = await getrecipes();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchrecipes();
  }, []);

  // Filter recipes based on search query
  const filteredRecipes = recipedata.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
      {/* Centered Search Bar */}
      <div className="w-full md:w-1/2 mb-6">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-gray-200"
        />
      </div>
      <div className="w-full  flex justify-end">
      <button className="p-3 rounded-md  bg-blue-700 flex justify-end text-white">< CirclePlus className="p-1 size-8" /></button>
      </div>
      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2   gap-6">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))
        ) : (
          <p className="text-gray-500">No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default RecipePage;
