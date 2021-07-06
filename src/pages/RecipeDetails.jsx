import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecomendationCards from '../components/RecomendationCards';
import organizeIngredientsAndMeasure from '../services/organizeIngredientsAndMeasure';
import setVideoURL from '../services/setVideoURL';
import MyContext from '../contexts/MyContext';
import MockRecipeDetails from '../services/MockRecipeDetails';
import setRecipes from '../services/setRecipes';
import fetchMeals from '../services/fetchMeals';

function RecipeDetails({ match }) {
  // const { drinks, meals } = useContext(MyContext);
  // const [localMeals, setLocalMeals] = useState([]);
  // const [localDrinks, setLocalDrinks] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [ingredientsAndMeasures, setIngredientsAndMeasures] = useState('');
  const [thumb, setThumb] = useState('loadin...');
  const [foodOrDrink, setFoodDrink] = useState('loadin...');
  const [category, setCategory] = useState('loadin...');
  const [url, setUrl] = useState('https://www.youtube.com/embed/VnZd8A84z4');
  useEffect(() => {
    if (recipe.strYoutube) setVideoURL(recipe.strYoutube, setUrl);
    else {
      const newFetchOfRecipes = async () => {
        const meals = await fetchMeals('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const quantity = 12;
        const twelveMeals = meals.meals.filter((_meal, index) => (
          index < quantity));

        // setLocalMeals(twelveMeals);
        const drinks = await fetchMeals('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        const twelveDrinks = drinks.drinks.filter((_drink, index) => (
          index < quantity));

        // setLocalDrinks(twelveDrinks);
        console.log(twelveMeals, twelveDrinks);
        // console.log(localMeals, localDrinks);
        setRecipes(match, twelveDrinks, twelveMeals,
          { setRecipe, setThumb, setFoodDrink, setCategory });
      };
      newFetchOfRecipes();
      console.log(recipe);
    }
    organizeIngredientsAndMeasure(recipe, setIngredientsAndMeasures);
  }, [recipe]);
  return (
    <section>
      {/* {console.log(match)} */}
      {/* {console.log(recipe.strInstructions)} */}
      { !recipe.strInstructions
        ? <MockRecipeDetails />
        : <section>
          <img src={ thumb } alt="some food" data-testid="recipe-photo" />
          <h1 data-testid="recipe-title">
            { foodOrDrink }
          </h1>
          <h4 data-testid="recipe-category">
            { category }
          </h4>
          <button type="button" data-testid="share-btn">
            Share
          </button>
          <button type="button" data-testid="favorite-btn">
            Favorite
          </button>
          <h2>Ingredients</h2>
          <ol>
            {ingredientsAndMeasures.length ? ingredientsAndMeasures[0]
              .map((ingredient, i) => (
                <li
                  key={ ingredient }
                  data-testid={ `${i}-ingredient-name-and-measure` }
                >
                  { `${ingredient[`strIngredient${i + 1}`]} - ${// strIngredients and strMeasure starts in strIngredients1 and strMeasure1.
                    ingredientsAndMeasures[1][i][`strMeasure${i + 1}`]}`}
                </li>)) : 'loading' }
          </ol>
          <h2>Instructions</h2>
          <p data-testid="instructions">
            { recipe.strInstructions }
          </p>
          <iframe
            title="food-title"
            data-testid="video"
            width="420"
            height="345"
            src={ url }
          />
          <h2>Recommended</h2>
          <RecomendationCards />
          <button
            data-testid="start-recipe-btn"
            type="button"
          >
            Start Recipe
          </button>
          </section>}
    </section>
  );
}

RecipeDetails.propTypes = {
  match: PropTypes.shape(
    { path: PropTypes.string,
      params: PropTypes.shape({
        id: PropTypes.string,
      }) },
  ).isRequired,
};

export default RecipeDetails;
