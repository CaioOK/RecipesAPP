import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function FoodIngredients() {
  return (
    <div>
      <Header pageTitle="Explorar Ingredientes" searchFeat={ false } />
      <Footer />
    </div>
  );
}

export default FoodIngredients;
