import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../contexts/MyContext';
import '../styles/explorer.css';

function FoodIngredients() {
  const { mealsIngredient, setMealsUrl } = useContext(MyContext);

  const clickHandleSearch = (e) => {
    setMealsUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e.target.name}`);
  };

  return (
    <div>
      <Header pageTitle="Explorar Ingredientes" searchFeat={ false } />
      <div className="master">
        {
          (
            (!mealsIngredient.length) ? <h3>Carregando...</h3>
              : mealsIngredient.map((ingredient, index) => (
                <Link key={ index } to="/Comidas">
                  <div
                    className="section"
                    data-testid={ `${index}-ingredient-card` }
                    key={ index }
                    name={ `${ingredient.strIngredient}` }
                    onClick={ clickHandleSearch }
                    onKeyPress={ clickHandleSearch }
                    role="button"
                    tabIndex={ index }
                  >
                    <img
                      src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
                      data-testid={ `${index}-card-img` }
                      alt={ `${ingredient.strIngredient}` }
                      name={ `${ingredient.strIngredient}` }
                      className="sectionImg"
                    />
                    <p
                      className="sectionText"
                      data-testid={ `${index}-card-name` }
                      name={ ingredient.strIngredient }
                    >
                      {ingredient.strIngredient}
                    </p>
                  </div>
                </Link>
              ))
          )
        }
      </div>
      <Footer />
    </div>
  );
}

export default FoodIngredients;
