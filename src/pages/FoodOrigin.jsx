import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../contexts/MyContext';
import RecipeCard from '../components/RecipeCard';
import Loading from '../components/Loading';
import '../App.css';

function FoodOrigin() {
  const { mealsOrigin, meals, setMealsUrl } = useContext(MyContext);

  const handleFoodsApiRequest = (value) => {
    console.log(value);
    if (value === 'All') {
      setMealsUrl('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    } else {
      setMealsUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`);
    }
  };
  console.log(mealsOrigin);
  return (
    <div>
      <Header pageTitle="Explorar Origem" searchFeat />
      <select
        data-testid="explore-by-area-dropdown"
        onChange={ (e) => handleFoodsApiRequest(e.target.value) }
      >
        {mealsOrigin.map((origin, index) => (
          <option
            key={ index }
            data-testid={ `${origin.strArea}-option` }
            value={ origin.strArea }
          >
            {origin.strArea}
          </option>
        ))}
      </select>

      <div className="master">
        {
          (
            (!meals.length) ? <Loading />
              : meals.map(({ strMealThumb = '', strMeal = '' }, index) => (
                <RecipeCard
                  key={ index }
                  imgUrl={ strMealThumb }
                  name={ strMeal }
                  index={ index }
                />))
          )
        }
      </div>
      <Footer />
    </div>
  );
}

export default FoodOrigin;
