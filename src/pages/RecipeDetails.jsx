import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecomendationCards from '../components/RecomendationCards';
import organizeIngredientsAndMeasure from '../services/organizeIngredientsAndMeasure';
import setVideoURL from '../services/setVideoURL';
import MyContext from '../contexts/MyContext';
import MockRecipeDetails from '../services/MockRecipeDetails';
import setRecipes from '../services/setRecipes';

function RecipeDetails({ match }) {
  const { drinks, meals } = useContext(MyContext);
  const [recipe, setRecipe] = useState({});
  const [ingredientsAndMeasures, setIngredientsAndMeasures] = useState('');
  const [thumb, setThumb] = useState('loadin...');
  const [foodOrDrink, setFoodDrink] = useState('loadin...');
  const [category, setCatagory] = useState('loadin...');
  const [url, setUrl] = useState('https://www.youtube.com/embed/VnZd8A84z4');
  useEffect(() => {
    setRecipes(match, drinks, meals, { setRecipe, setThumb, setFoodDrink, setCatagory });
    organizeIngredientsAndMeasure(recipe, setIngredientsAndMeasures);
    if (recipe.strYoutube) setVideoURL(recipe.strYoutube, setUrl);
  }, []);
  return (
    recipe.strMealThumb
      ? <section>
        {console.log(match)}
        {console.log(recipe)}
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
                { `${ingredient[`strIngredient${i + 1}`]} - ${
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
        </section>
      : <MockRecipeDetails />
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
