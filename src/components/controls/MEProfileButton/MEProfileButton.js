import { NavLink, useLocation } from 'react-router-dom';

import clsx from 'clsx'

import profileLogo from '../../../images/profile.svg'

import './MEProfileButton.css';

function MEProfileButton(props) {
  const route = useLocation().pathname;
  const {
    className,
  } = props;
  const {
    onClick: handleMenuPopupClick,
  } = props;

  return (
    <NavLink
      className={clsx('MEProfileButton', className, (route === '/') ? 'MEProfileButton_page_main' : '')}
      to="/profile"
      onClick={handleMenuPopupClick}
    >
      <span className="MEProfileButton__title">Аккаунт</span>
      <img
        className={clsx('MEProfileButton__logo', (route === '/') ? 'MEProfileButton__logo_page_main' : '')}
        src={profileLogo}
        alt="Аккаунт"
      />
    </NavLink>
  );
}

export default MEProfileButton;
