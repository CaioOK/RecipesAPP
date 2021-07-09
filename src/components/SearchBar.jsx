import React, { useContext, useState } from 'react';
import MyContext from '../contexts/MyContext';
import '../App.css';

function SearchBar() {
  const [radioType, setRadioType] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const { setMealsUrl, setDrinksUrl, userPage, setShouldRedirect,
  } = useContext(MyContext);
  const { alert } = window;

  const handleFoodsApiRequest = (type, value) => {
    setShouldRedirect(true);

    switch (type) {
    case 'ingredient':
      setMealsUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`);
      break;
    case 'letter': {
      if (searchValue.length !== 1) {
        alert('Sua busca deve conter somente 1 (um) caracter');
      }
      setMealsUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`);
      break;
    }
    case 'name':
      setMealsUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
      break;
    default:
      break;
    }
  };

  const handleDrinkssApiRequest = (type, value) => {
    setShouldRedirect(true);

    switch (type) {
    case 'ingredient':
      setDrinksUrl(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`);
      break;
    case 'letter': {
      if (searchValue.length !== 1) {
        alert('Sua busca deve conter somente 1 (um) caracter');
      }
      setDrinksUrl(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${value}`);
      break;
    }
    case 'name':
      setDrinksUrl(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`);
      break;
    default:
      break;
    }
  };

  const handleClick = () => {
    if (userPage === 'Foods') {
      handleFoodsApiRequest(radioType, searchValue);
    }
    if (userPage === 'Drinks') {
      handleDrinkssApiRequest(radioType, searchValue);
    }
  };

  return (
    <form className="search">
      <input
        data-testid="search-input"
        id="search-input"
        type="text"
        value={ searchValue }
        onChange={ (e) => setSearchValue(e.target.value) }
      />
      <div onChange={ (e) => setRadioType(e.target.value) }>
        <label htmlFor="ingredient-search">
          <input
            type="radio"
            name="search-type"
            id="ngredient-search"
            value="ingredient"
            data-testid="ingredient-search-radio"
          />
          Ingrediente
        </label>
        <label htmlFor="name-search">
          <input
            type="radio"
            name="search-type"
            id="name-search"
            value="name"
            data-testid="name-search-radio"
          />
          Nome
        </label>
        <label htmlFor="first-letter-search">
          <input
            type="radio"
            name="search-type"
            id="first-letter-search"
            value="letter"
            data-testid="first-letter-search-radio"
          />
          Primeira letra
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
