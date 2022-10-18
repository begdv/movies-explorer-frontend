import { useLocation } from 'react-router-dom';

import clsx from 'clsx'


import './Header.css';

import MELogo from '../../controls/MELogo/MELogo';
import MELink from '../../controls/MELink/MELink';
import MELinkButton from '../../controls/MELinkButton/MELinkButton';
import Navigation from '../Navigation/Navigation';


function Header(props) {
  const route = useLocation().pathname;
  const {
    isLoggedIn = false,
    onMenuPopup: handleMenuPopup,
    onNavigation: handleNavigation,
  } = props;

  const HeaderLoggedIn = () => {
    return (
      <header className={clsx('Header', (route === '/') ? 'Header_page_main' : '')}>
        <Navigation onMenuPopup={handleMenuPopup} onNavigation={handleNavigation} />
      </header>
    )
  };

  const HeaderSignin = () => {
    return (
      <header className={clsx('Header', 'Header_page_signin')}>
        <MELogo className="MELogo_page_signing"/>
      </header>
    )
  };

  const HeaderLanding = () => {
    return (
      <header className={clsx('Header', 'Header_page_main')}>
        <div className="Header__main">
          <MELogo />
          <MELink className="MELink_type_header" to="/signup" title="Регистрация"/>
          <MELinkButton className="MELinkButton_type_header" to="/signin" title="Войти"/>
        </div>
      </header>
    )
  };

  return (
    isLoggedIn ? <HeaderLoggedIn /> : (
      (route === '/') ? <HeaderLanding /> : <HeaderSignin />
    )
  );
}

export default Header;
