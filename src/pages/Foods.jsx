import React, { useContext } from 'react';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import MyContext from '../contexts/MyContext';

function Foods() {
  const { meals, setApiUrl } = useContext(MyContext);

  setApiUrl('https://www.themealdb.com/api/json/v1/1/search.php?f=b');

  if (meals.length === 0) return <h3>Nada encontrado!</h3>;

  console.log(meals);
  return (
    <div>
      <Header pageTitle="Comidas" searchFeat />
      <h1>Olá eu sou a pagina de Comida</h1>
      {meals.map((meal, index) => (
        <RecipeCard
          key={ index }
          imgUrl={ meal.strMealThumb }
          name={ meal.strMeal }
          index={ index }
        />))}
    </div>
  );
}

export default Foods;
