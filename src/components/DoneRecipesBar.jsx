import React from 'react';
import PropTypes from 'prop-types';

function DoneRecipesBar({ recipes, setRecipes }) {
  function handleClick({ target: { value } }) {
    switch (value) {
    case 'All': {
      setRecipes([...recipes]);
      break;
    }
    case 'Food': {
      const filteredRecipes = recipes.filter((recipe) => recipe.type === 'comida');
      setRecipes([...filteredRecipes]);
      break;
    }
    case 'Drinks': {
      const filteredRecipes = recipes.filter((recipe) => recipe.type === 'bebida');
      setRecipes([...filteredRecipes]);
      break;
    }
    default:
      break;
    }
  }

  return (
    <section>
      <input
        type="button"
        value="All"
        onClick={ handleClick }
        data-testid="filter-by-all-btn"
      />
      <input
        type="button"
        value="Food"
        onClick={ handleClick }
        data-testid="filter-by-food-btn"
      />
      <input
        type="button"
        value="Drinks"
        onClick={ handleClick }
        data-testid="filter-by-drink-btn"
      />
    </section>
  );
}

DoneRecipesBar.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setRecipes: PropTypes.func.isRequired,
};

export default DoneRecipesBar;
