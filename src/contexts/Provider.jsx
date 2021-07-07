import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import genericFetch from '../services/genericFetch';

function Provider({ children }) {
  const initialMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const initialDrinksUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [mealsUrl, setMealsUrl] = useState(initialMealsUrl);
  const [drinksUrl, setDrinksUrl] = useState(initialDrinksUrl);
  const [userPage, setUserPage] = useState('');
  const [noResultsFound, setNoResultsFound] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(true);

  useEffect(() => {
    const getMeals = async () => {
      const quantity = 12;
      const mealsResponse = await genericFetch(mealsUrl);
      if (!mealsResponse.meals) {
        setNoResultsFound(true);
        return;
      }
      const twelveMeals = mealsResponse.meals.slice(0, quantity);
      setMeals(twelveMeals);
    };
    getMeals();
  }, [mealsUrl]);

  useEffect(() => {
    const getDrinks = async () => {
      const quantity = 12;
      const drinksResponse = await genericFetch(drinksUrl);
      if (!drinksResponse.drinks) {
        setNoResultsFound(true);
        return;
      }
      const twelveDrinks = drinksResponse.drinks.slice(0, quantity);

      setDrinks(twelveDrinks);
    };

    getDrinks();
  }, [drinksUrl]);

  return (
    <MyContext.Provider
      value={
        {
          meals,
          setMealsUrl,
          drinks,
          setDrinksUrl,
          userPage,
          setUserPage,
          noResultsFound,
          setNoResultsFound,
          shouldRedirect,
          setShouldRedirect }
      }
    >
      { children }
    </MyContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
