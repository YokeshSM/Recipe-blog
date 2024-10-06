const recipeData = [
  {
    name: "Maggie",
    ingredients: [
      "instant_noodles",
      "tomato_sauce",
      "onion_powder",
      "garlic_powder",
      "vegetable_oil",
      "chili_flakes",
    ],
    image: "https://example.com/images/maggie.jpg",
    preparationTime: "10 minutes",
    likes: 120,
    method:
      "Boil water and add noodles. Cook for 2 minutes, add sauce and spices, then stir and serve.",
  },
  {
    name: "Pasta",
    ingredients: [
      "pasta",
      "olive_oil",
      "garlic",
      "basil",
      "parmesan_cheese",
      "salt",
      "pepper",
    ],
    image: "https://example.com/images/pasta.jpg",
    preparationTime: "15 minutes",
    likes: 200,
    method:
      "Cook pasta in salted water. Sauté garlic in olive oil, mix in pasta, and top with cheese and basil.",
  },
  {
    name: "Cheese Sandwich",
    ingredients: [
      "bread",
      "cheese",
      "butter",
      "tomato",
      "lettuce",
      "salt",
      "pepper",
    ],
    image: "https://example.com/images/cheese_sandwich.jpg",
    preparationTime: "5 minutes",
    likes: 90,
    method:
      "Spread butter on bread, layer cheese, tomato, and lettuce. Season with salt and pepper, then grill.",
  },
  {
    name: "Vegetable Stir Fry",
    ingredients: [
      "mixed_vegetables",
      "soy_sauce",
      "ginger",
      "garlic",
      "sesame_oil",
      "tofu",
    ],
    image: "https://example.com/images/vegetable_stir_fry.jpg",
    preparationTime: "20 minutes",
    likes: 150,
    method:
      "Heat oil, stir-fry garlic and ginger, add vegetables and tofu. Drizzle with soy sauce and serve.",
  },
  {
    name: "Pancakes",
    ingredients: [
      "flour",
      "milk",
      "eggs",
      "sugar",
      "baking_powder",
      "butter",
      "maple_syrup",
    ],
    image: "https://example.com/images/pancakes.jpg",
    preparationTime: "15 minutes",
    likes: 250,
    method:
      "Mix ingredients to form a batter. Pour onto a hot griddle, flip when bubbles form, and serve with syrup.",
  },
  {
    name: "Fruit Salad",
    ingredients: ["apple", "banana", "grapes", "yogurt", "honey"],
    image: "https://example.com/images/fruit_salad.jpg",
    preparationTime: "10 minutes",
    likes: 180,
    method:
      "Chop fruits, mix in a bowl, and drizzle with yogurt and honey for a refreshing salad.",
  },
  {
    name: "Chicken Curry",
    ingredients: [
      "chicken",
      "curry_powder",
      "coconut_milk",
      "onion",
      "garlic",
      "ginger",
    ],
    image: "https://example.com/images/chicken_curry.jpg",
    preparationTime: "30 minutes",
    likes: 300,
    method:
      "Sauté onions, garlic, and ginger. Add chicken and curry powder, then stir in coconut milk until cooked.",
  },
  {
    name: "Rice and Beans",
    ingredients: ["rice", "black_beans", "onion", "garlic", "bell_pepper"],
    image: "https://example.com/images/rice_and_beans.jpg",
    preparationTime: "25 minutes",
    likes: 130,
    method:
      "Cook rice separately. Sauté onion, garlic, and bell pepper, mix in beans, and serve with rice.",
  },
  {
    name: "Tacos",
    ingredients: [
      "taco_shells",
      "ground_beef",
      "lettuce",
      "cheese",
      "sour_cream",
    ],
    image: "https://example.com/images/tacos.jpg",
    preparationTime: "20 minutes",
    likes: 220,
    method:
      "Brown ground beef, season, and fill taco shells. Top with lettuce, cheese, and sour cream.",
  },
  {
    name: "Chocolate Cake",
    ingredients: [
      "flour",
      "cocoa_powder",
      "sugar",
      "eggs",
      "butter",
      "vanilla_extract",
    ],
    image: "https://example.com/images/chocolate_cake.jpg",
    preparationTime: "45 minutes",
    likes: 350,
    method:
      "Mix dry ingredients, add eggs and butter. Bake in a preheated oven until set, then cool and frost.",
  },
];

const listRecipes = async (req, res) => {
  try {
    res.json({ success: true, songs: recipeData });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

export { listRecipes };
