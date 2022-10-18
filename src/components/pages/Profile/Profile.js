import React from 'react';

import clsx from 'clsx';

import CurrentUserContext from '../../../contexts/CurrentUserContext';
import {useFormWithValidation} from '../../../validators/formValidator';
import MEFormError from "../../controls/MEFormError/MEFormError";

import MEFormInput from "../../controls/MEFormInput/MEFormInput";
import MEButton from '../../controls/MEButton/MEButton';

import {
  PATTERN_USERNAME,
  PATTERN_EMAIL,
  ERROR_VALIDATION_USERNAME,
  ERROR_VALIDATION_EMAIL,
} from "../../../utils/const";

import './Profile.css';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const {
    onUpdateProfile: handleUpdateProfile,
    onEditProfile: handleEditProfile,
    onLogout: handleLogout,
    errorMessage,
    isEditProfile,
  } = props;

  const {values, handleChange, errors, isValid} = useFormWithValidation({
    name: currentUser.name,
    email: currentUser.email,
  },
  {
    name: ERROR_VALIDATION_USERNAME,
    email: ERROR_VALIDATION_EMAIL,
  }
  );

  const handleProfileEditClick= (e) => {
    e.preventDefault();

    handleEditProfile();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUpdateProfile(values);
  };

  const handleLogoutClick = (e) => {
    handleLogout();
  };

  const disabledSave = !isValid ||
    ((currentUser.name === values.name) && (currentUser.email === values.email));

  return (
    <main className="Profile App__main">
      <section className="Profile__content">
        <form className="Profile__form" name="ProfileForm" noValidate>
          <h1 className="Profile__title">Привет {currentUser.name}!</h1>
          <MEFormInput
            type="text"
            name="name"
            title="Имя"
            pattern={PATTERN_USERNAME}
            required={true}
            value={values["name"]}
            disabled={isEditProfile ? false : true}
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
            disabled={isEditProfile ? false : true}
            onChangeValue={handleChange}
            errorMessage={errors["email"]}
          />
          {
            isEditProfile ?
              <div className="Profile__controls">
                <MEFormError
                  errorMessage={errorMessage}
                  className="MEFormError_type_main"
                />
                <MEButton
                  className={clsx('MEButton_type_profile-submit', disabledSave ? 'MEButton_disabled' : '')}
                  type="submit"
                  disabled={!isValid}
                  title="Сохранить"
                  onClick={handleSubmit}
                />
              </div>
            :
              <div className="Profile__controls">
                <MEButton
                  className="MEButton_type_profile-edit"
                  type="button"
                  title="Редактировать"
                  onClick={handleProfileEditClick}
                />
                <MEButton
                  className="MEButton_type_profile-signout"
                  type="button"
                  title="Выйти из аккаунта"
                  onClick={handleLogoutClick}
                />
              </div>
          }
        </form>
      </section>
    </main>
  );
}

export default Profile;
