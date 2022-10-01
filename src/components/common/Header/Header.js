import './Header.css';

import MELogo from '../../controls/MELogo/MELogo';
import MELink from '../../controls/MELink/MELink';
import MENavLink from '../../controls/MENavLink/MENavLink';
import MELinkButton from '../../controls/MELinkButton/MELinkButton';
import MEProfileButton from '../../controls/MEProfileButton/MEProfileButton';
import MEMenuPopupButton from '../../controls/MEMenuPopupButton/MEMenuPopupButton';


function Header(props) {
  const {
    isLoggedIn,
    onMenuPopup: handleMenuPopupButtonClick,
  } = props;
  return (
    <header className="Header">
      <nav className="Header__navbar">
        <MELogo />
        {isLoggedIn ?
          <>
            <ul className="Header__navlinks">
              <li className="Header__navlink">
                <MENavLink className="MENavLink_type_header" to="/movies" title="Фильмы"/>
              </li>
              <li className="Header__navlink">
                <MENavLink className="MENavLink_type_header" to="/saved-movies" title="Сохраненные фильмы"/>
              </li>
            </ul>
            <MEProfileButton className="MEProfileButton_type_header"/>
            <MEMenuPopupButton onClick={handleMenuPopupButtonClick}/>
          </>
        :
          <div className="Header__sign">
            <MELink className="MELink_type_header" to="/signup" title="Регистрация"/>
            <MELinkButton className="MELinkButton_type_header" to="/signin" title="Войти"/>
          </div>
        }
      </nav>
    </header>
  );
}

export default Header;