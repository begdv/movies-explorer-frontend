import React from 'react';

import clsx from 'clsx';

import {useFormWithValidation} from '../../../validators/formValidator';
import MEFormError from "../../controls/MEFormError/MEFormError";

import MEFormInput from "../../controls/MEFormInput/MEFormInput";
import MEButton from '../../controls/MEButton/MEButton';
import MELink from '../../controls/MELink/MELink';

import {
  PATTERN_EMAIL,
  ERROR_VALIDATION_EMAIL,
} from "../../../utils/const";

import './Login.css';

function Login(props) {
  const {
    onLogin: handleLogin,
    infoMessage,
  } = props;

  const {values, handleChange, errors, isValid} = useFormWithValidation({},
    {
      email: ERROR_VALIDATION_EMAIL,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin(values);
  };

  return (
    <main className="Login App__main">
      <section className="Login__content">
        <form className="Login__form" name="LoginForm" onSubmit={handleSubmit} noValidate>
          <h1 className="Login__title">Рады видеть!</h1>
          <MEFormInput
            type="text"
            name="email"
            title="E-mail"
            required={true}
            pattern={PATTERN_EMAIL}
            value={values["email"]}
            onChangeValue={handleChange}
            errorMessage={errors["email"]}
          />
          <MEFormInput
            type="password"
            name="password"
            title="Пароль"
            required={true}
            value={values["password"]}
            onChangeValue={handleChange}
            errorMessage={errors["password"]}
          />
          <div className="Login__controls">
            <MEFormError
              errorMessage={infoMessage}
              className="MEFormError_type_main"
            />
            <MEButton
              className={clsx('MEButton_type_profile-submit', !isValid ? 'MEButton_disabled' : '')}
              disabled={!isValid}
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
        </form>
      </section>
    </main>
  );
}

export default Login;
