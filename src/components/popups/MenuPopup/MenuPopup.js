import MENavLink from '../../controls/MENavLink/MENavLink';
import MEProfileButton from '../../controls/MEProfileButton/MEProfileButton';

import './MenuPopup.css';

import Popup from "../Popup/Popup";

function MenuPopup(props) {
  const {
    isOpen,
    onClose: handleClosePopupClick,
  } = props;
  console.log(isOpen);
  return (
    <Popup
      isOpen={isOpen}
      onClose={handleClosePopupClick}
      popupClassName="Popup_type_menu"
      popupContainerClassName="Popup__container_type_menu"
    >
      <div className="MenuPopup">
        <ul className="MenuPopup__navlinks">
          <li className="MenuPopup__navlink">
            <MENavLink
              to="/"
              className="MENavLink_type_popup"
              title="Главная"
              onClick={handleClosePopupClick}
            />
          </li>
          <li className="MenuPopup__navlink">
            <MENavLink
              to="/movies"
              className="MENavLink_type_popup"
              title="Фильмы"
              onClick={handleClosePopupClick}
            />
          </li>
            <MENavLink
              to="/saved-movies"
              className="MENavLink_type_popup"
              title="Сохраненные фильмы"
              onClick={handleClosePopupClick}
            />
        </ul>
        <MEProfileButton
          onClick={handleClosePopupClick}
        />
      </div>
    </Popup>
  );
}

export default MenuPopup;