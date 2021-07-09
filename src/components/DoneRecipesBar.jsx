import React from 'react';

function DoneRecipesBar() {
  return (
    <section>
      <input
        type="button"
        value="All"
        data-testid="filter-by-all-btn"
      />
      <input
        type="button"
        value="Food"
        data-testid="filter-by-food-btn"
      />
      <input
        type="button"
        value="Drinks"
        data-testid="filter-by-drink-btn"
      />
    </section>
  );
}

export default DoneRecipesBar;
