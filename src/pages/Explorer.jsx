import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explorer() {
  return (
    <div>
      <Header pageTitle="Explorar" searchFeat={ false } />
      <h1>Olá eu sou a pagina de Explorar</h1>
      <Footer />
    </div>
  );
}

export default Explorer;
