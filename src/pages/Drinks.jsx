import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MyContext from '../contexts/MyContext';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';
import '../App.css';
import genericFetch from '../services/genericFetch';
import CategoryBar from '../components/CategoryBar';

function Drinks({ history }) {
  const { drinks, setUserPage, noResultsFound, setNoResultsFound, shouldRedirect,
  } = useContext(MyContext);
  const message = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
  const { alert } = window;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const setPage = () => {
      setUserPage('Drinks');
    };
    setPage();
  }, [setUserPage]);

  useEffect(() => {
    const drinksCategoriesUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    const quantity = 5;

    const getCategories = async () => {
      const data = await genericFetch(drinksCategoriesUrl);
      const fiveCategories = data.drinks.slice(0, quantity);
      setCategories(fiveCategories);
    };

    getCategories();
  }, []);

  if (drinks.length === 1 && shouldRedirect) {
    history.push(`/bebidas/${drinks[0].idDrink}`);
  }

  if (noResultsFound) {
    setTimeout(() => alert(message), 1);
    setNoResultsFound(false);
  }

  return (
    <main>
      <Header pageTitle="Bebidas" searchFeat />
      <CategoryBar categories={ categories } recipeType="drinks" />
      <section className="master">
        {
          (
            (!drinks.length) ? <h3>Carregando...</h3>
              : drinks.map((drink, index) => (
                <Link key={ index } to={ `/bebidas/${drink.idDrink}` }>
                  <RecipeCard
                    drink={ drink }
                    imgUrl={ drink.strDrinkThumb }
                    name={ drink.strDrink }
                    index={ index }
                  />
                </Link>
              ))
          )
        }
      </section>
      <Footer />
    </main>
  );
}

Drinks.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Drinks;
