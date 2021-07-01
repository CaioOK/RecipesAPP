import React from 'react';

function SearchBar() {
  return (
    <form>
      <input
        data-testid="search-input"
        id="search-input"
        type="text"
      />
      <label htmlFor="ingredient-search">
        Ingrediente
        <input
          type="radio"
          name="search-type"
          id="ngredient-search"
          value="ingredient"
          data-testid="ingredient-search-radio"
        />
      </label>
      <label htmlFor="name-search">
        Nome
        <input
          type="radio"
          name="search-type"
          id="name-search"
          value="name"
          data-testid="name-search-radio"
        />
      </label>
      <label htmlFor="first-letter-search">
        Primeira letra
        <input
          type="radio"
          name="search-type"
          id="first-letter-search"
          value="firstLetter"
          data-testid="first-letter-search-radio"
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
