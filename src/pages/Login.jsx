import React, { useState, useEffect } from 'react';

function Login() {
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
  };

  return (
    <form>
      <label htmlFor="email">
        Email
        <input
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
          data-testid="password-input"
          id="password"
          type="password"
          value={ password }
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        onClick={ handleClick }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
