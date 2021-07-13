import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../contexts/MyContext';
import '../App.css';

function DrinkIngredients() {
  const { drinksIngredient, setDrinksUrl } = useContext(MyContext);

  const clickHandleSearch = (e) => {
    setDrinksUrl(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${e.target.name}`);
  };

  return (
    <main>
      <Header pageTitle="Explorar Ingredientes" searchFeat={ false } />
      <section className="master">
        {
          (
            (!drinksIngredient.length) ? <h3>Carregando...</h3>
              : drinksIngredient.map((ingredient, index) => (
                <Link key={ index } to="/Bebidas">
                  <div
                    className="section"
                    data-testid={ `${index}-ingredient-card` }
                    key={ index }
                    name={ `${ingredient.strIngredient1}` }
                    onClick={ clickHandleSearch }
                    onKeyPress={ clickHandleSearch }
                    role="button"
                    tabIndex={ index }
                  >
                    <img
                      src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                      alt={ `${ingredient.strIngredient1}` }
                      data-testid={ `${index}-card-img` }
                      name={ `${ingredient.strIngredient1}` }
                      className="sectionImg"
                    />
                    <p
                      className="sectionText"
                      data-testid={ `${index}-card-name` }
                      name={ `${ingredient.strIngredient1}` }
                    >
                      {ingredient.strIngredient1}
                    </p>
                  </div>
                </Link>
              ))
          )
        }
      </section>
      <Footer />
    </main>
  );
}

export default DrinkIngredients;
