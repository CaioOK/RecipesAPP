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
  const [favRecipesToShow, setFavRecipesToShow] = useState(storedFavoriteRecipes);
  const kind = kindOf(history);

  return (
    <section>
      <Header pageTitle="Receitas Favoritas" searchFeat={ false } />
      <DoneRecipesBar
        setRecipes={ setFavRecipesToShow }
        recipes={ storedFavoriteRecipes }
      />
      {favRecipesToShow.map((recipe, index) => (
        <main key={ `${recipe.id}-done-card${index}` }>
          <FavouriteBtn
            recipe={ recipe }
            kind={ kind }
            id={ recipe.id }
            index={ index }
            setFavRecipesToShow={ setFavRecipesToShow }
          />
          <DoneRecipesCard
            recipe={ recipe }
            index={ index }
          />
        </main>
      ))}
    </section>
  );
}

RecipesFav.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default RecipesFav;
