import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DoneRecipesBar from '../components/DoneRecipesBar';
import DoneRecipesCard from '../components/DoneRecipesCard';
import Header from '../components/Header';
import FavouriteBtn from '../components/FavouriteBtn';

const kindOf = (history) => {
  if (history.location.pathname.includes('bebidas')) return 'Drink';
  if (history.location.pathname.includes('comidas')) return 'Meal';
};

function RecipesFav({ history }) {
  const storedFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [doneRecipesToShow, setDoneRecipesToShow] = useState(storedFavoriteRecipes);
  const kind = kindOf(history);

  return (
    <div>
      <Header pageTitle="Receitas Favoritas" searchFeat={ false } />
      <h1>Olá eu sou a pagina de Receitas Favoritas</h1>
      <DoneRecipesBar
        setRecipes={ setDoneRecipesToShow }
        recipes={ storedFavoriteRecipes }
      />
      <div>
        {doneRecipesToShow.map((recipe, index) => (
          <div key={ `${recipe.id}-done-card${index}` }>
            <FavouriteBtn
              recipe={ recipe }
              kind={ kind }
              id={ recipe.id }
              index={ index }
            />
            <DoneRecipesCard
              recipe={ recipe }
              index={ index }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

RecipesFav.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default RecipesFav;
