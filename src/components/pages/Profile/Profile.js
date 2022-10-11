import React from 'react';

import clsx from 'clsx';

import CurrentUserContext from '../../../contexts/CurrentUserContext';
import {useFormWithValidation} from '../../../validators/formValidator';

import MEFormInput from "../../controls/MEFormInput/MEFormInput";
import MEButton from '../../controls/MEButton/MEButton';

import './Profile.css';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const {
    onUpdateProfile: handleUpdateProfile,
    onLogout: handleLogout,
  } = props;
  const {values, handleChange, errors, isValid} = useFormWithValidation({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [isEditProfile, SetIsEditProfile] = React.useState(false);
  function handleProfileEditClick(e) {
    e.preventDefault();

    SetIsEditProfile(true);
  }
  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateProfile(values);
  }
  function handleLogoutClick(e) {
    handleLogout();
  }
  return (
    <main className="Profile App__main">
      <section className="Profile__content">
        <form className="Profile__form" name="ProfileForm" noValidate>
          <h1 className="Profile__title">Привет {currentUser.name}!</h1>
          <MEFormInput
            type="text"
            name="name"
            title="Имя"
            minLength="2"
            maxLength="30"
            required={true}
            value={values["name"]}
            disabled={isEditProfile ? false : true}
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
            disabled={isEditProfile ? false : true}
            onChangeValue={handleChange}
            hasError={errors["email"]}
            errorMessage={errors["email"]}
          />
          {
            isEditProfile ?
              <div className="Profile__controls">
                <MEButton
                  className={clsx('MEButton_type_profile-submit', !isValid ? 'MEButton_disabled' : '')}
                  type="submit"
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