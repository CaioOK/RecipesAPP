import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FavouriteBtn from './FavouriteBtn';
import ShareBtn from './ShareBtn';

if (!localStorage.getItem('favoriteRecipes')) {
  localStorage.setItem('favoriteRecipes', JSON.stringify([]));
}

const isItChecked = (myLocalStorage, objectKey, id, myParams) => {
  if (myParams.isChecked) {
    const newLocalStorage = {
      ...myLocalStorage,
      [objectKey]: {
        ...myLocalStorage[objectKey],
        [id]: myLocalStorage[objectKey][id].concat(myParams.myId),
      } };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newLocalStorage));
  } else {
    const newLocalStorage = {
      ...myLocalStorage,
      [objectKey]: {
        ...myLocalStorage[objectKey],
        [id]: myLocalStorage[objectKey][id].filter((e) => e !== myParams.myId),
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newLocalStorage));
  }
};

const kindOf = (history) => {
  if (history.location.pathname.includes('bebidas')) return 'Drink';
  if (history.location.pathname.includes('comidas')) return 'Meal';
};

const objectKind = (history) => {
  if (history.location.pathname.includes('bebidas')) return 'cocktails';
  if (history.location.pathname.includes('comidas')) return 'meals';
};

const setCheckArr = (id, objkey) => {
  const inProg = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (inProg[objkey][id]) return (inProg[objkey][id]);
  const myStorage = { ...inProg, [objkey]: { ...inProg[objkey], [id]: [] } };
  localStorage.setItem('inProgressRecipes', JSON.stringify(myStorage));
  return [''];
};

function InProgress({ recipe, history, id }) {
  const [finnishBtn, setFinnishBtn] = useState(true);
  const kind = kindOf(history);
  const objectKey = objectKind(history);
  const checkedArr = setCheckArr(id, objectKey);
  const ingredientKeys = Object.keys(recipe).filter((e) => e.includes('strIngredient'))
    .filter((e) => recipe[e] !== '' && recipe[e] !== null);

  function finnishRecipe() {
    const ingrArr = Array.prototype.slice
      .call(document.querySelectorAll('[name=ingredients]'));
    if (ingrArr.every((e) => e.checked === true)) {
      setFinnishBtn(false);
    } else {
      setFinnishBtn(true);
    }
  }

  useEffect(() => {
    finnishRecipe();
  });

  function handleChange(event) {
    const myParams = {
      isChecked: event.target.checked,
      myId: event.target.id,
    };
    const myLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    isItChecked(myLocalStorage, objectKey, id, myParams);
    finnishRecipe();
  }

  return (
    <div>
      <img
        data-testid="recipe-photo"
        alt={ `${kind}` }
        src={ recipe[`str${kind}Thumb`] }
        className="sectionImg"
      />
      <h1 data-testid="recipe-title">{ recipe[`str${kind}`] }</h1>
      <FavouriteBtn recipe={ recipe } kind={ kind } id={ id } />
      <ShareBtn id={ id } kind={ kind } />
      <h3 data-testid="recipe-category">{ recipe.strCategory }</h3>
      { ingredientKeys.map((k, index) => (
        <div key={ k }>
          <label
            data-testid={ `${index}-ingredient-step` }
            htmlFor={ index }
          >
            <input
              defaultChecked={ checkedArr.includes(`${index}`) }
              type="checkbox"
              name="ingredients"
              id={ index }
              onChange={ (e) => handleChange(e) }
            />
            { `${recipe[k]} ${recipe[`strMeasure${index + 1}`]}` }
          </label>
          <br />
        </div>
      ))}
      <p data-testid="instructions">{ recipe.strInstructions }</p>
      <button
        disabled={ finnishBtn }
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finalizar
      </button>
    </div>
  );
}

InProgress.propTypes = {
  recipe: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  id: PropTypes.string.isRequired,
};

export default InProgress;
