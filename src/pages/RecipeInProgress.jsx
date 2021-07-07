import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import genericFetch from '../services/genericFetch';

if (!localStorage.getItem('inProgressRecipes')) {
  localStorage.setItem('inProgressRecipes', { cocktails: {}, meals: {} });
}

function RecipeInProgress({ match, history }) {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const setingRecipe = async () => {
      const url = () => {
        if (history.location.pathname.includes('bebidas')) {
          return `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;
        }
        if (history.location.pathname.includes('comidas')) {
          return `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;
        }
      };
      const myUrl = url();
      const myRecipe = await genericFetch(myUrl);
      if (history.location.pathname.includes('bebidas')) setRecipe(myRecipe.drinks[0]);
      if (history.location.pathname.includes('comidas')) setRecipe(myRecipe.meals[0]);
    };
    setingRecipe();
  }, [match, history]);

  console.log(recipe);

  const ingredientKeys = Object.keys(recipe).filter((e) => e.includes('strIngredient'))
    .filter((e) => recipe[e] !== '' && recipe[e] !== null);
  console.log(ingredientKeys);

  const kindOf = () => {
    if (history.location.pathname.includes('bebidas')) return 'Drink';
    if (history.location.pathname.includes('comidas')) return 'Meal';
  };

  const kind = kindOf();

  return (
    <div>
      <img
        data-testid="recipe-photo"
        alt={ `${kind}` }
        src={ recipe[`str${kind}Thumb`] }
      />
      <h1 data-testid="recipe-title">{ recipe[`str${kind}`] }</h1>
      <button type="button" data-testid="share-btn">Share</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <h3 data-testid="recipe-category">{ recipe.strCategory }</h3>
      { ingredientKeys.map((k, index) => (
        <div key={ k }>
          <label
            data-testid={ `${index}-ingredient-step` }
            htmlFor={ index }
          >
            <input type="checkbox" name="ingredients" id={ index } />
            { `${recipe[k]} ${recipe[`strMeasure${index + 1}`]}` }
          </label>
          <br />
        </div>
      ))}
      <p data-testid="instructions">{ recipe.strInstructions }</p>
      <button type="button" data-testid="finish-recipe-btn">Finalizar</button>
    </div>
  );
}

RecipeInProgress.propTypes = {
  match: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

export default RecipeInProgress;
