const setRecipes = (match, drinks, meals,
  { setRecipe, setThumb, setFoodDrink, setCategory }) => {
  let recipe;
  if (match.path.includes('bebidas')) {
    [recipe] = drinks
      .filter(({ idDrink }) => idDrink === match.params.id);
    console.log(drinks);
    setRecipe(recipe);
    setThumb(recipe.strMealThumb || recipe.strDrinkThumb);
    setFoodDrink(recipe.strMeal || recipe.strDrink);
    setCategory(recipe.strCategory);
  } else {
    [recipe] = meals
      .filter(({ idMeal }) => idMeal === match.params.id);
    console.log(meals);
    setRecipe(recipe);
    setThumb(recipe.strMealThumb || recipe.strDrinkThumb);
    setFoodDrink(recipe.strMeal || recipe.strDrink);
    setCategory(recipe.strCategory);
  }
  console.log(recipe);
};

export default setRecipes;
