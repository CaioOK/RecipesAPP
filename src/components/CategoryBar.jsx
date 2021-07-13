import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../contexts/MyContext';

function CategoryBar({ categories, recipeType }) {
  const { setDrinksUrl, setMealsUrl, setShouldRedirect } = useContext(MyContext);
  const [currentCategory, setCurrentCategory] = useState('');

  const handeClick = ({ target: { value } }) => {
    setShouldRedirect(false);

    switch (recipeType) {
    case 'meals': {
      if (value === 'All') {
        setMealsUrl('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        break;
      } else if (currentCategory === value) {
        setMealsUrl('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        setCurrentCategory('All');
        break;
      } else {
        const categoryUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`;
        setMealsUrl(categoryUrl);
        setCurrentCategory(value);
        break;
      }
    }
    case 'drinks': {
      if (value === 'All') {
        setDrinksUrl('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        break;
      } else if (currentCategory === value) {
        setDrinksUrl('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        setCurrentCategory('All');
        break;
      } else {
        const categoryUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`;
        setDrinksUrl(categoryUrl);
        setCurrentCategory(value);
        break;
      }
    }
    default:
      break;
    }
  };

  if (!categories.length) return <span>Loading categories...</span>;

  return (
    <nav>
      <input
        type="button"
        value="All"
        data-testid="All-category-filter"
        onClick={ (event) => handeClick(event) }
      />
      {categories.map(({ strCategory }) => (
        <input
          type="button"
          key={ strCategory }
          value={ strCategory }
          data-testid={ `${strCategory}-category-filter` }
          onClick={ (event) => handeClick(event) }
        />))}
    </nav>
  );
}

CategoryBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  recipeType: PropTypes.string.isRequired,
};

export default CategoryBar;
