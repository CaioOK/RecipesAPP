import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function createMyObj(recipe, kind) {
  return {
    id: recipe[`id${kind}`] || recipe.id,
    type: kind === 'Meal' ? 'comida' : 'bebida',
    area: (recipe.strArea ? recipe.strArea : '') || (recipe.area || ''),
    category: (recipe.strCategory ? recipe.strCategory : '') || recipe.category,
    alcoholicOrNot: (recipe.strAlcoholic ? recipe.strAlcoholic : '')
      || (recipe.alcoholicOrNot || ''),
    name: (recipe[`str${kind}`] || recipe.name),
    image: (recipe[`str${kind}Thumb`]) || recipe.image,
  };
}

function setMyStorage(recipe, kind, id, heart) {
  const myRecipeObj = createMyObj(recipe, kind);
  const myStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const isRepeted = myStorage.find((e) => e.id === myRecipeObj.id);
  if (((heart && recipe[`id${kind}`] && !isRepeted)
    || (heart && recipe.id && isRepeted))) {
    const newStorage = myStorage.concat(myRecipeObj);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newStorage));
  }
  if (!heart) {
    const newStorage = myStorage.filter((e) => e.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newStorage));
  }
}

function FavouriteBtn({ id, kind, recipe, index }) {
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
      data-testid={ index
        || index === 0 ? `${index}-horizontal-favorite-btn` : 'favorite-btn' }
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
  index: PropTypes.number.isRequired,
};

export default FavouriteBtn;
