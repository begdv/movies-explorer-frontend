import React from 'react';

import MEFormInput from "../../controls/MEFormInput/MEFormInput";
import MEFormError from "../../controls/MEFormError/MEFormError";
import MEButton from '../../controls/MEButton/MEButton';
import MELink from '../../controls/MELink/MELink';

import './Register.css';

function Register(props) {
  const [name, setName] = React.useState('Виталий');
  const [email, setEmail] = React.useState('pochta@yandex.ru');
  const [password, setPassword] = React.useState('12345678');
  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <main className="Register App__main">
      <section className="Register__content">
        <h1 className="Register__title">Добро пожаловать!</h1>
        <form className="Register__form" name="RegisterForm" noValidate>
          <MEFormInput
            type="text"
            name="name"
            title="Имя"
            minLength="2"
            maxLength="30"
            required="true"
            value={name}
            onChangeValue={handleChangeName}
          />
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
            hasError="true"
          />
          <MEFormError
            hasError="true"
            errorMessage="Что-то пошло не так..."
          />
        </form>
        <div className="Register__controls">
          <MEButton
            className="MEButton_type_profile-submit"
            type="submit"
            title="Зарегистрироваться"
          />
          <div className="Register__prompt">
            <span className="Register__prompt-title">
              Уже зарегистрированы?
            </span>
            <MELink className="MELink_type_signing" to="/signin" title="Войти"/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Register;