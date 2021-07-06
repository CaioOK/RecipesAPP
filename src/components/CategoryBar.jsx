import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../contexts/MyContext';

function CategoryBar({ categories, recipeType }) {
  const { setDrinksUrl, setMealsUrl, setShouldRedirect } = useContext(MyContext);

  const handeClick = ({ target: { value } }) => {
    setShouldRedirect(false);

    if (recipeType === 'meals') {
      const categoryUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`;
      setMealsUrl(categoryUrl);
    } else if (recipeType === 'drinks') {
      const categoryUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`;
      setDrinksUrl(categoryUrl);
    }
  };

  if (!categories.length) return <span>Loading categories...</span>;

  return (
    <section>
      {categories.map(({ strCategory }) => (
        <input
          type="button"
          key={ strCategory }
          value={ strCategory }
          data-testid={ `${strCategory}-category-filter` }
          onClick={ (event) => handeClick(event) }
        />))}
    </section>
  );
}

CategoryBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  recipeType: PropTypes.string.isRequired,
};

export default CategoryBar;
