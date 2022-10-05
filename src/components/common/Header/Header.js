import { Routes, Route } from "react-router-dom";

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
  } = props;
  let className;
  if(route === '/') {
    className = 'Header_page_main';
  } else if ((route.replaceAll('/','') === 'signup') || (route.replaceAll('/','') === 'signin')) {
    className = 'Header_page_signin';
  } else if ((route.replaceAll('/','') === 'movies') || (route.replaceAll('/','') === 'saved-movies')  || (route.replaceAll('/','') === 'profile')) {
    className = '';
  } else {
    className = 'Header_not_found';
  }
  return (
    <header className={clsx('Header', className)}>
      <Routes>
        <Route
          end
          path="/"
          element={
            isLoggedIn ?
              <Navigation onMenuPopup={handleMenuPopup}/>
            :
              <div className="Header__main">
                <MELogo />
                <MELink className="MELink_type_header" to="/signup" title="Регистрация"/>
                <MELinkButton className="MELinkButton_type_header" to="/signin" title="Войти"/>
              </div>
          }
        />
        <Route
          path="movies"
          element={
            <Navigation onMenuPopup={handleMenuPopup}/>
          }
        />
        <Route
          path="saved-movies"
          element={
            <Navigation onMenuPopup={handleMenuPopup}/>
          }
        />
        <Route
          path="profile"
          element={
            <Navigation onMenuPopup={handleMenuPopup}/>
          }
        />
        <Route
          path="signup"
          element={
            <MELogo className="MELogo_page_signing"/>
          }
        />
        <Route
          path="signin"
          element={
            <MELogo className="MELogo_page_signing"/>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;