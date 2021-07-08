import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function setMyStorage(recipe, kind, id, heart) {
  const myRecipeObj = {
    id: recipe[`id${kind}`],
    type: kind === 'Meal' ? 'comida' : 'bebida',
    area: recipe.strArea ? recipe.strArea : '',
    category: recipe.strCategory ? recipe.strCategory : '',
    alcoholicOrNot: recipe.strAlcoholic ? recipe.strAlcoholic : '',
    name: recipe[`str${kind}`],
    image: recipe[`str${kind}Thumb`],
  };
  const myStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (heart && recipe[`id${kind}`]) {
    const newStorage = myStorage.concat(myRecipeObj);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newStorage));
  } else {
    const newStorage = myStorage.filter((e) => e.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newStorage));
  }
}

function FavouriteBtn({ id, kind, recipe }) {
  const [heart, setHeart] = useState(JSON.parse(localStorage.getItem('favoriteRecipes'))
    .find((e) => e.id === id));

  useEffect(() => {
    setMyStorage(recipe, kind, id, heart);
  }, [heart, id, kind, recipe]);

  useEffect(() => {
    const myStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (myStorage.find((e) => e.id === id)) {
      setHeart(true);
    }
  }, [id]);

  return (
    <button
      type="button"
      src={ heart ? blackHeartIcon : whiteHeartIcon }
      onClick={ () => setHeart(!heart) }
      data-testid="favorite-btn"
    >
      <img
        src={ heart ? blackHeartIcon : whiteHeartIcon }
        alt="fav icon"
      />
    </button>
  );
}

FavouriteBtn.propTypes = {
  recipe: PropTypes.shape().isRequired,
  kind: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default FavouriteBtn;
