import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import fetchMeals from '../services/fetchMeals';

function Provider({ children }) {
  const [meals, setMeals] = useState([]);
  const [apiUrl, setApiUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?f=b');

  useEffect(() => {
    const getMeals = async () => {
      const quantity = 12;
      const mealsResponse = await fetchMeals(apiUrl);
      const twelveMeals = mealsResponse.meals.filter((_meal, index) => index < quantity);
      setMeals(twelveMeals);
    };
    getMeals();
  }, [apiUrl]);

  return (
    <MyContext.Provider value={ { meals, setApiUrl } }>
      { children }
    </MyContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
