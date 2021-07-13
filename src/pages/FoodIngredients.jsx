import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../contexts/MyContext';
import '../App.css';

function FoodIngredients() {
  const { mealsIngredient, setMealsUrl } = useContext(MyContext);

  const clickHandleSearch = (e) => {
    setMealsUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e.target.name}`);
  };

  return (
    <section>
      <Header pageTitle="Explorar Ingredientes" searchFeat={ false } />
      <main className="master">
        {
          (
            (!mealsIngredient.length) ? <h3>Carregando...</h3>
              : mealsIngredient.map((ingredient, index) => (
                <Link key={ index } to="/Comidas">
                  <section
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
                  </section>
                </Link>
              ))
          )
        }
      </main>
      <Footer />
    </section>
  );
}

export default FoodIngredients;
