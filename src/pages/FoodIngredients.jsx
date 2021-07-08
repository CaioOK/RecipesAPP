import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../contexts/MyContext';
import '../App.css';

function FoodIngredients() {
  const { mealsIngredient } = useContext(MyContext);

  return (
    <div>
      <Header pageTitle="Explorar Ingredientes" searchFeat={ false } />
      <div className="master">
        {
          mealsIngredient.map((ingredient, index) => (
            <div
              className="section"
              data-testid={ `${index}-ingredient-card` }
              key={ index }
            >
              <img
                src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
                data-testid={ `${index}-card-img` }
                alt={ `${ingredient.strIngredient}` }
                className="sectionImg"
              />
              <h3 className="sectionText" data-testid={ `${index}-card-name` }>
                {ingredient.strIngredient}
              </h3>
            </div>
          ))
        }
      </div>
      <Footer />
    </div>
  );
}

export default FoodIngredients;
