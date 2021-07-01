import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import fetchMeals from '../services/fetchMeals';

function Provider({ children }) {
  const initialMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const initialDrinksUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [mealsUrl, setMealsUrl] = useState(initialMealsUrl);
  const [drinksUrl, setDrinksUrl] = useState(initialDrinksUrl);

  useEffect(() => {
    const getMeals = async () => {
      const quantity = 12;
      const mealsResponse = await fetchMeals(mealsUrl);
      const twelveMeals = mealsResponse.meals.filter((_meal, index) => index < quantity);
      setMeals(twelveMeals);
    };

    getMeals();
  }, [mealsUrl]);

  useEffect(() => {
    const getDrinks = async () => {
      const quantity = 12;
      const drinksResponse = await fetchMeals(drinksUrl);
      const twelveDrinks = drinksResponse.drinks.filter((_drink, index) => (
        index < quantity));

      setDrinks(twelveDrinks);
    };

    getDrinks();
  }, [drinksUrl]);

  return (
    <MyContext.Provider value={ { meals, setMealsUrl, drinks, setDrinksUrl } }>
      { children }
    </MyContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
