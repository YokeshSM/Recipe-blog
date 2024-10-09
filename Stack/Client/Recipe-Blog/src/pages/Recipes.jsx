import { Heart } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { getrecipes } from '../services/api'; // Make sure this API service is working
import { Pencil } from 'lucide-react'

import RecipeCard from '../components/RecipeCard'
import AddComponent  from '../components/AddComponent'

// RecipeCard Component




// RecipePage Component
const RecipePage = () => {
  const [recipedata, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetching recipes from the API
  const fetchrecipes = async () => {
    try {
      const { data } = await getrecipes();
      if (Array.isArray(data)) {
        setData(data);
      } else {
        console.log("Data fetched is not an array:", data);
      }
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
      
        <AddComponent fetchrecipes={fetchrecipes}/>  
      </div>
      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2   gap-6">       
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} fetchrecipes={fetchrecipes} />
          ))
        ) : (
          <p className="text-gray-500">No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default RecipePage;
