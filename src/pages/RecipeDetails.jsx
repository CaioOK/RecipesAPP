import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecomendationCards from '../components/RecomendationCards';
import organizeIngredientsAndMeasure from '../services/organizeIngredientsAndMeasure';
import setVideoURL from '../services/setVideoURL';

function RecipeDetails({ location: { state: { meal } } }) {
  const [ingredientsAndMeasures, setIngredientsAndMeasures] = useState('');
  const [url, setUrl] = useState('https://www.youtube.com/embed/VVnZd8A84z4');
  useEffect(() => {
    organizeIngredientsAndMeasure(meal, setIngredientsAndMeasures);
    setVideoURL(meal.strYoutube, setUrl);
  }, []);
  return (
    <section>
      {console.log(meal)}
      <img src={ meal.strMealThumb } alt="some food" data-testid="recipe-photo" />
      <h1 data-testid="recipe-title">
        { meal.strMeal }
      </h1>
      <h4 data-testid="recipe-category">
        { meal.strCategory }
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
        { meal.strInstructions }
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
  );
}

RecipeDetails.propTypes = {
  location: PropTypes.shape(
    { state: PropTypes.shape({
      meal: PropTypes.shape({
        strMealThumb: PropTypes.string,
        strMeal: PropTypes.string,
        strCategory: PropTypes.string,
        strInstructions: PropTypes.string,
        strYoutube: PropTypes.string,
      }),
    }) },
  ).isRequired,
};

export default RecipeDetails;
