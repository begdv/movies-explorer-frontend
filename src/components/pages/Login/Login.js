import React from 'react';

import MEFormInput from "../../controls/MEFormInput/MEFormInput";
import MEFormError from "../../controls/MEFormError/MEFormError";
import MEButton from '../../controls/MEButton/MEButton';
import MELink from '../../controls/MELink/MELink';

import './Login.css';

function Login() {
  const [email, setEmail] = React.useState('pochta@yandex.ru');
  const [password, setPassword] = React.useState('12345678');
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="Login App__main">
      <main className="Login__content">
        <h1 className="Login__title">Рады видеть!</h1>
        <form className="Login__form" name="LoginForm" noValidate>
          <MEFormInput
            type="text"
            name="email"
            title="E-mail"
            minLength="2"
            maxLength="30"
            required="true"
            value={email}
            onChangeValue={handleChangeEmail}
          />
          <MEFormInput
            type="password"
            name="password"
            title="Пароль"
            minLength="2"
            maxLength="30"
            required="true"
            value={password}
            onChangeValue={handleChangePassword}
          />
          <MEFormError
            hasError="false"
            errorMessage=""
          />
        </form>
        <div className="Login__controls">
          <MEButton
            className="MEButton_type_profile-submit"
            type="submit"
            title="Войти"
          />
          <div className="Login__prompt">
            <span className="Login__prompt-title">
            Ещё не зарегистрированы?
            </span>
            <MELink className="MELink_type_signing" to="/signup" title="Регистрация"/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;