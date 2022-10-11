import React from 'react';

import clsx from 'clsx';

import {useFormWithValidation} from '../../../validators/formValidator';

import MEFormInput from "../../controls/MEFormInput/MEFormInput";
import MEButton from '../../controls/MEButton/MEButton';
import MELink from '../../controls/MELink/MELink';

import './Register.css';

function Register(props) {
  const {
    onRegister: handleRegister,
  } = props;
  const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();
  function handleSubmit(e) {
    e.preventDefault();

    handleRegister(values);
    resetForm();
  }
  return (
    <main className="Register App__main">
      <section className="Register__content">
        <form className="Register__form" name="RegisterForm"  onSubmit={handleSubmit} noValidate>
          <h1 className="Register__title">Добро пожаловать!</h1>
          <MEFormInput
            type="text"
            name="name"
            title="Имя"
            minLength="2"
            maxLength="30"
            pattern="[a-zA-Zа-яА-ЯёЁ0-9_ ]"
            required={true}
            value={values["name"]}
            onChangeValue={handleChange}
            hasError={errors["name"]}
            errorMessage={errors["name"]}
          />
          <MEFormInput
            type="text"
            name="email"
            title="E-mail"
            required={true}
            value={values["email"]}
            onChangeValue={handleChange}
            hasError={errors["email"]}
            errorMessage={errors["email"]}
          />
          <MEFormInput
            type="password"
            name="password"
            title="Пароль"
            minLength="2"
            maxLength="30"
            required={true}
            value={values["password"]}
            onChangeValue={handleChange}
            hasError={errors["password"]}
            errorMessage={errors["password"]}
          />
          <div className="Register__controls">
            <MEButton
              className={clsx('MEButton_type_profile-submit', !isValid ? 'MEButton_disabled' : '')}
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
        </form>
      </section>
    </main>
  );
}

export default Register;