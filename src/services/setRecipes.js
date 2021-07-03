const setRecipes = (match, drinks, meals, callback) => {
  let recipe;
  if (match.path.includes('bebidas')) {
    recipe = drinks
      .filter(({ idDrink }) => idDrink === match.params.id);
      console.log( drinks);
  } else {
    [recipe] = meals
      .filter(({ idMeal }) => idMeal === match.params.id);
  }
  // callback.setRecipe(recipe);
  // callback.setThumb(recipe.strMealThumb || recipe.strDrinkThumb);
  // callback.setFoodDrink(recipe.strMeal || recipe.strDrink);
  // callback.setCategory(recipe.strCategory);
};

export default setRecipes;
