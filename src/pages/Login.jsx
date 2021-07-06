import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import '../App.css';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const validateLogin = () => {
      const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
      const minLength = 7;
      const btnLogin = document.querySelector('[data-testid="login-submit-btn"]');

      if (btnLogin) {
        if (emailRegex.test(email) && password.length >= minLength) {
          btnLogin.disabled = false;
        } else {
          btnLogin.disabled = true;
        }
      }
    };
    validateLogin();
  }, [email, password]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    switch (id) {
    case 'email': {
      setEmail(value);
      break;
    }
    case 'password': {
      setPassword(value);
      break;
    }
    default:
      break;
    }
  };

  const handleClick = () => {
    const userEmail = JSON.stringify({ email });

    localStorage.setItem('user', userEmail);
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);

    setEmail('');
    setPassword('');
    history.push('/comidas');
  };

  return (
    <form className="login">
      <label htmlFor="email">
        Email
        <input
          className="label"
          data-testid="email-input"
          id="email"
          type="text"
          value={ email }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          className="label"
          data-testid="password-input"
          id="password"
          type="password"
          value={ password }
          onChange={ handleChange }
        />
      </label>
      <button
        className="input"
        type="button"
        data-testid="login-submit-btn"
        onClick={ handleClick }
      >
        Entrar
      </button>
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Login;
