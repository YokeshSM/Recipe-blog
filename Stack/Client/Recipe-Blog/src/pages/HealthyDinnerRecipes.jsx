import React from 'react';

const HealthyDinnerRecipes = () => {
  const recipes = [
    {
      title: "Grilled Chicken with Veggies",
      ingredients: ["2 chicken breasts", "1 zucchini", "1 bell pepper", "Olive oil", "Salt", "Pepper"],
      instructions: "Season chicken breasts with olive oil, salt, and pepper. Grill chicken for 5-7 minutes per side until fully cooked. Slice zucchini and bell pepper, grill them for 4-5 minutes. Serve with chicken."
    },
    {
      title: "Stir-Fry Tofu with Broccoli",
      ingredients: ["1 block firm tofu", "2 cups broccoli", "2 tbsp soy sauce", "1 tbsp sesame oil", "1 garlic clove", "1 tbsp sesame seeds"],
      instructions: "Cut tofu into cubes and sauté in sesame oil until golden. Add broccoli and garlic, cook for 5 minutes. Stir in soy sauce and sprinkle with sesame seeds. Serve over rice."
    },
    {
      title: "Quinoa Salad with Avocado",
      ingredients: ["1 cup cooked quinoa", "1 avocado", "1/2 cucumber", "1/2 cup cherry tomatoes", "Lemon juice", "Olive oil", "Salt", "Pepper"],
      instructions: "Mix cooked quinoa with diced avocado, cucumber, and cherry tomatoes. Drizzle with olive oil and lemon juice, season with salt and pepper. Toss and serve."
    },
    {
      title: "Shrimp Tacos",
      ingredients: ["1/2 lb shrimp", "4 tortillas", "1/2 cup cabbage slaw", "1 tbsp sour cream", "1 tbsp lime juice", "Salt", "Chili powder"],
      instructions: "Season shrimp with salt and chili powder. Sauté for 3-4 minutes until cooked. Warm tortillas, fill with shrimp, cabbage slaw, sour cream, and a squeeze of lime juice."
    },
    {
      title: "Eggplant Parmesan",
      ingredients: ["1 eggplant", "1/2 cup marinara sauce", "1/2 cup mozzarella cheese", "1 tbsp olive oil", "Basil leaves"],
      instructions: "Slice eggplant, drizzle with olive oil, and bake for 15 minutes at 400°F. Top with marinara sauce and mozzarella, bake for another 5 minutes until cheese is melted. Garnish with basil leaves."
    },
    {
      title: "Salmon with Asparagus",
      ingredients: ["2 salmon fillets", "1 bunch asparagus", "Olive oil", "Garlic powder", "Salt", "Pepper"],
      instructions: "Season salmon with olive oil, garlic powder, salt, and pepper. Roast salmon and asparagus at 400°F for 12-15 minutes. Serve together with a side of lemon."
    },
    {
      title: "Vegetarian Burrito Bowl",
      ingredients: ["1 cup brown rice", "1/2 cup black beans", "1/2 avocado", "1/2 cup corn", "Salsa", "Lime", "Cilantro"],
      instructions: "Assemble a bowl with cooked brown rice, black beans, corn, and sliced avocado. Top with salsa, cilantro, and a squeeze of lime juice."
    },
    {
      title: "Spinach and Feta Wrap",
      ingredients: ["1 whole wheat tortilla", "1/2 cup spinach", "1/4 cup feta cheese", "1 tbsp hummus"],
      instructions: "Spread hummus on the tortilla. Add spinach and feta, then roll into a wrap. Serve warm or cold."
    },
    {
      title: "Zucchini Noodles with Pesto",
      ingredients: ["2 zucchinis", "1/4 cup pesto", "Cherry tomatoes", "Parmesan cheese"],
      instructions: "Spiralize zucchini into noodles. Sauté for 2-3 minutes until slightly softened. Toss with pesto, cherry tomatoes, and Parmesan cheese."
    },
    {
      title: "Chickpea Curry",
      ingredients: ["1 can chickpeas", "1/2 onion", "1 garlic clove", "1 tbsp curry powder", "1/2 cup coconut milk", "Cilantro"],
      instructions: "Sauté onion and garlic in oil until soft. Add curry powder, chickpeas, and coconut milk. Simmer for 10 minutes, garnish with cilantro. Serve with rice or naan."
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Healthy Dinner Recipes Under 30 Minutes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {recipes.map((recipe, index) => (
          <div key={index} className="p-4 border rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
            <h3 className="text-xl font-semibold">Ingredients:</h3>
            <ul className="list-disc list-inside mb-4">
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold">Instructions:</h3>
            <p>{recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthyDinnerRecipes;
