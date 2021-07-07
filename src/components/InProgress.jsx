import React from 'react';
import PropTypes from 'prop-types';

const kindOf = (history) => {
  if (history.location.pathname.includes('bebidas')) return 'Drink';
  if (history.location.pathname.includes('comidas')) return 'Meal';
};

const objectKind = (history) => {
  if (history.location.pathname.includes('bebidas')) return 'cocktails';
  if (history.location.pathname.includes('comidas')) return 'meals';
};

const setCheckArr = (id, history) => {
  const inProg = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (inProg.meals[id]) return (inProg.meals[id]);
  if (inProg.cocktails[id]) return (inProg.cocktails[id]);
  if (history.location.pathname.includes('comidas')) {
    const myStorage = { ...inProg, meals: { ...inProg.meals, [id]: [] } };
    localStorage.setItem('inProgressRecipes', JSON.stringify(myStorage));
  }
  if (history.location.pathname.includes('bebidas')) {
    const myStorage = { ...inProg, cocktails: { ...inProg.cocktails, [id]: [] } };
    localStorage.setItem('inProgressRecipes', JSON.stringify(myStorage));
  }
  return [''];
};

function InProgress({ recipe, history, id }) {
  const kind = kindOf(history);
  const objectKey = objectKind(history);
  const checkedArr = setCheckArr(id, history);
  const ingredientKeys = Object.keys(recipe).filter((e) => e.includes('strIngredient'))
    .filter((e) => recipe[e] !== '' && recipe[e] !== null);

  function handleChange(event) {
    const isChecked = event.target.checked;
    const myId = event.target.id;
    const myLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (isChecked) {
      const newLocalStorage = {
        ...myLocalStorage,
        [objectKey]: {
          ...myLocalStorage[objectKey],
          [id]: myLocalStorage[objectKey][id].concat(myId),
        } };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newLocalStorage));
    } else {
      const newLocalStorage = {
        ...myLocalStorage,
        [objectKey]: {
          ...myLocalStorage[objectKey],
          [id]: myLocalStorage[objectKey][id].filter((e) => e !== myId),
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newLocalStorage));
    }
  }

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
      <button type="button" data-testid="finish-recipe-btn">Finalizar</button>
    </div>
  );
}

InProgress.propTypes = {
  recipe: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  id: PropTypes.string.isRequired,
};

export default InProgress;
