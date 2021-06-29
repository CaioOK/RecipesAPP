import React from 'react';

function Login() {
  return (
    <form>
      <label htmlFor="email">
        Email
        <input data-testid="email-input" id="email" type="text" />
      </label>
      <label htmlFor="password">
        Password
        <input data-testid="password-input" id="password" type="password" />
      </label>
      <button type="button" data-testid="login-submit-btn">Entrar</button>
    </form>
  );
}

export default Login;
