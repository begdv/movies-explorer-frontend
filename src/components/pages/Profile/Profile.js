import React from 'react';

import MEFormInput from "../../controls/MEFormInput/MEFormInput";
import MEFormError from "../../controls/MEFormError/MEFormError";
import MEButton from '../../controls/MEButton/MEButton';

import './Profile.css';

function Profile(props) {
  const [name, setName] = React.useState('Виталий');
  const [email, setEmail] = React.useState('pochta@yandex.ru');
  const [isEditProfile, SetIsEditProfile] = React.useState(false);
  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleProfileEditClick(e) {
    SetIsEditProfile(true);
  }
  function handleProfileSubmitClick(e) {
    e.preventDefault();
    SetIsEditProfile(false);
  }
  return (
    <div className="Profile App__main">
      <main className="Profile__content">
        <h1 className="Profile__title">Привет, Виталий!</h1>
        <form className="Profile__form" name="ProfileForm" noValidate>
          <MEFormInput
            type="text"
            name="name"
            title="Имя"
            minLength="2"
            maxLength="30"
            required="true"
            value={name}
            disabled={isEditProfile ? false : true}
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
            disabled={isEditProfile ? false : true}
            onChangeValue={handleChangeEmail}
          />
          <MEFormError
            hasError="false"
            errorMessage=""
          />          
        </form>

        {
          isEditProfile ?
            <div className="Profile__controls">
              <MEButton
                className="MEButton_type_profile-submit"
                type="submit"
                title="Сохранить"
                onClick={handleProfileSubmitClick}
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
            />
          </div>
        }

      </main>
    </div>
  );
}

export default Profile;