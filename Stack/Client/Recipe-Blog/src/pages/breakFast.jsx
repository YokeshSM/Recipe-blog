import React from 'react';

const BreakFast = () => {
  const recipes = [
    {
      title: "Avocado Toast",
      ingredients: ["1 slice bread", "1/2 avocado", "Salt", "Pepper", "Lemon juice"],
      instructions: "Toast the bread, mash the avocado, and spread it on the bread. Add salt, pepper, and lemon juice to taste."
    },
    {
      title: "Oatmeal with Fruits",
      ingredients: ["1/2 cup oats", "1 cup milk", "Mixed fruits", "Honey"],
      instructions: "Cook the oats with milk, top with fruits, and drizzle with honey."
    },
    {
      title: "Smoothie Bowl",
      ingredients: ["1 banana", "1/2 cup berries", "1/2 cup yogurt", "Granola", "Chia seeds"],
      instructions: "Blend banana, berries, and yogurt, pour into a bowl, and top with granola and chia seeds."
    },
    {
      title: "Egg Muffins",
      ingredients: ["4 eggs", "Chopped vegetables", "Cheese", "Salt", "Pepper"],
      instructions: "Whisk the eggs, add vegetables, cheese, salt, and pepper. Pour into muffin tins and bake for 15-20 minutes."
    },
    {
      title: "Peanut Butter Banana Toast",
      ingredients: ["1 slice bread", "Peanut butter", "1/2 banana", "Honey"],
      instructions: "Toast the bread, spread peanut butter, add banana slices, and drizzle with honey."
    },
    {
      title: "Greek Yogurt Parfait",
      ingredients: ["1 cup Greek yogurt", "Granola", "Mixed berries", "Honey"],
      instructions: "Layer yogurt, granola, and berries in a glass, drizzle with honey."
    },
    {
      title: "Breakfast Quesadilla",
      ingredients: ["1 tortilla", "Scrambled eggs", "Cheese", "Salsa"],
      instructions: "Place scrambled eggs and cheese in a tortilla, fold and cook until golden on both sides."
    },
    {
      title: "Overnight Oats",
      ingredients: ["1/2 cup oats", "1 cup milk", "Chia seeds", "Fruits"],
      instructions: "Mix oats, milk, and chia seeds, refrigerate overnight, top with fruits before serving."
    },
    {
      title: "Veggie Omelette",
      ingredients: ["2 eggs", "Chopped vegetables", "Salt", "Pepper"],
      instructions: "Whisk eggs, add vegetables, cook in a pan until eggs are set."
    },
    {
      title: "Banana Pancakes",
      ingredients: ["1 banana", "2 eggs", "Cinnamon"],
      instructions: "Mash banana, whisk with eggs, add cinnamon, and cook like pancakes."
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">10 Easy Breakfast Recipes for Busy Mornings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recipes.map((recipe, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <h3 className="font-semibold">Ingredients:</h3>
            <ul className="list-disc pl-5">
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <h3 className="font-semibold mt-2">Instructions:</h3>
            <p>{recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreakFast;
