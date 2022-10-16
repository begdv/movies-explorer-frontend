import React from 'react';

import clsx from 'clsx';

import {useFormWithValidation} from '../../../validators/formValidator';
import MEFormError from "../../controls/MEFormError/MEFormError";

import MEFormInput from "../../controls/MEFormInput/MEFormInput";
import MEButton from '../../controls/MEButton/MEButton';
import MELink from '../../controls/MELink/MELink';

import {PROMPT_USERNAME} from "../../../utils/const";

import './Register.css';

function Register(props) {
  const {
    onRegister: handleRegister,
    infoMessage,
  } = props;

  const {values, handleChange, errors, isValid} = useFormWithValidation({},
  {
    name: PROMPT_USERNAME,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    handleRegister(values);
  };

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
            pattern="[a-zA-Zа-яА-ЯёЁ0-9_ ]{2,30}"
            required={true}
            value={values["name"]}
            onChangeValue={handleChange}
            errorMessage={errors["name"]}
          />
          <MEFormInput
            type="email"
            name="email"
            title="E-mail"
            required={true}
            value={values["email"]}
            onChangeValue={handleChange}
            errorMessage={errors["email"]}
          />
          <MEFormInput
            type="password"
            name="password"
            title="Пароль"
            minLength="8"
            maxLength="30"
            required={true}
            value={values["password"]}
            onChangeValue={handleChange}
            errorMessage={errors["password"]}
          />
          <div className="Register__controls">
            <MEFormError
              errorMessage={infoMessage}
              className="MEFormError_type_main"
            />
            <MEButton
              className={clsx('MEButton_type_profile-submit', !isValid ? 'MEButton_disabled' : '')}
              disabled={!isValid}
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
