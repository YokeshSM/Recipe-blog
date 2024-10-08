import React, { useState } from "react";
import axios from "axios";
import { CirclePlus } from "lucide-react";
import { MdCancel } from "react-icons/md";

const AddComponent = () => {
  const [visible, setVisible] = useState(false);
  const [recipe, setRecipe] = useState({
    name: "",
    preparationTime: "",
    servings: "",
    ingredients: "",
    procedure: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "ingredients") {
      setRecipe({ ...recipe, [name]: value });
    } else {
      setRecipe({ ...recipe, [name]: value });
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    // Split ingredients by commas and trim whitespace
    const ingredientsList = recipe.ingredients
      .split(",")
      .map((ingredient) => ingredient.trim());

    try {
      const response = await axios.post("http://localhost:4000/recipe/add", {
        ...recipe,
        ingredients: ingredientsList,
      });
      console.log(response.data);

      setRecipe({
        name: "",
        preparationTime: "",
        servings: "",
        ingredients: "",
        procedure: "",
      });
      setVisible(false);
    } catch (error) {
      console.error("Error adding recipe:", error);
      setErrorMessage("Failed to add the recipe. Please try again."); // Show error message
    }
  };

  return (
    <>
      <div className="flex justify-end mb-4">
        <button
          className="p-3 rounded-md bg-blue-600 flex text-white shadow-lg hover:bg-blue-700 transition duration-200"
          onClick={() => setVisible(true)}
        >
          <CirclePlus className="p-1 size-8" />
        </button>
      </div>
      {visible && (
        <div className="fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center backdrop-blur-sm">
          <div className="p-6 w-full max-w-md bg-white rounded-lg border border-gray-300 shadow-md">
            <div className="flex justify-between mb-4">
              <h1 className="text-2xl font-bold">Add Your Recipe</h1>
              <MdCancel
                onClick={() => setVisible(false)}
                className="text-3xl text-red-500 hover:text-red-700 cursor-pointer"
              />
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}{" "}
            <form onSubmit={handleAdd}>
              {Object.keys(recipe).map((key, index) => (
                <div key={index} className="mb-4">
                  {key !== "procedure" ? (
                    <input
                      type={key === "servings" ? "number" : "text"}
                      name={key}
                      value={recipe[key]}
                      onChange={handleChange}
                      placeholder={
                        key.charAt(0).toUpperCase() + key.slice(1) + "..."
                      }
                      className="w-full border border-gray-300 rounded-lg p-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                  ) : (
                    <textarea
                      name={key}
                      value={recipe[key]}
                      onChange={handleChange}
                      placeholder="Recipe's Procedure..."
                      className="w-full border border-gray-300 rounded-lg p-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                      rows={4}
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-green-600 p-2 rounded-lg text-white text-xl hover:bg-green-700 transition duration-200"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddComponent;
