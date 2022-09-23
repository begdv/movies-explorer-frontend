import { NavLink } from 'react-router-dom';

import clsx from 'clsx'

import profileLogo from '../../../images/profile.svg'

import './MEProfileButton.css';

function MEProfileButton(props) {
  const {className} = props;
  const {
    onClick: handleMenuPopupClick,
  } = props;
  return (
    <NavLink
      className={clsx('MEProfileButton', className)}
      to="/profile"
      onClick={handleMenuPopupClick}
    >
      <span className="MEProfileButton__title">Аккаунт</span>
      <img className="MEProfileButton__logo" src={profileLogo} alt="Аккаунт" />
    </NavLink>
  );
}

export default MEProfileButton;