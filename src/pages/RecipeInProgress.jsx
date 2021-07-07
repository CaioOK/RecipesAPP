import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import genericFetch from '../services/genericFetch';
import InProgress from '../components/InProgress';

if (!localStorage.getItem('inProgressRecipes')) {
  localStorage.setItem('inProgressRecipes', JSON.stringify({ cocktails: {}, meals: {} }));
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

  return (
    <div>
      <InProgress recipe={ recipe } history={ history } id={ match.params.id } />
    </div>
  );
}

RecipeInProgress.propTypes = {
  match: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

export default RecipeInProgress;
