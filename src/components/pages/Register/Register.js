import React from 'react';

import clsx from 'clsx';

import {useFormWithValidation} from '../../../validators/formValidator';
import MEFormError from "../../controls/MEFormError/MEFormError";

import MEFormInput from "../../controls/MEFormInput/MEFormInput";
import MEButton from '../../controls/MEButton/MEButton';
import MELink from '../../controls/MELink/MELink';

import {
  PATTERN_USERNAME,
  PATTERN_EMAIL,
  PATTERN_PASSWORD,
  ERROR_VALIDATION_USERNAME,
  ERROR_VALIDATION_EMAIL,
  ERROR_VALIDATION_PASSWORD
} from "../../../utils/const";

import './Register.css';

function Register(props) {
  const {
    onRegister: handleRegister,
    infoMessage,
  } = props;

  const {values, handleChange, errors, isValid} = useFormWithValidation({},
  {
    name: ERROR_VALIDATION_USERNAME,
    email: ERROR_VALIDATION_EMAIL,
    password: ERROR_VALIDATION_PASSWORD,
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
            pattern={PATTERN_USERNAME}
            required={true}
            value={values["name"]}
            onChangeValue={handleChange}
            errorMessage={errors["name"]}
          />
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
            pattern={PATTERN_PASSWORD}
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
