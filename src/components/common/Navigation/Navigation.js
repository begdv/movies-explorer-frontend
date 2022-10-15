import MELogo from '../../controls/MELogo/MELogo';
import MENavLink from '../../controls/MENavLink/MENavLink';
import MEProfileButton from '../../controls/MEProfileButton/MEProfileButton';
import MEMenuPopupButton from '../../controls/MEMenuPopupButton/MEMenuPopupButton';

import './Navigation.css';

function Navigation(props) {
  const {
    onMenuPopup: handleMenuPopupButtonClick,
    onNavigation: handleNavigationClick,
  } = props;

  return (
    <nav className="Navigation">
      <MELogo />
      <ul className="Navigation__navlinks">
        <li className="Navigation__navlink">
          <MENavLink
            className="MENavLink_type_header"
            to="/movies"
            title="Фильмы"
            onClick={handleNavigationClick}
          />
        </li>
        <li className="Navigation__navlink">
          <MENavLink
            className="MENavLink_type_header"
            to="/saved-movies"
            title="Сохраненные фильмы"
            onClick={handleNavigationClick}
          />
        </li>
      </ul>
      <MEProfileButton className="MEProfileButton_type_header"/>
      <MEMenuPopupButton onClick={handleMenuPopupButtonClick}/>
    </nav>
  );
}

export default Navigation;
