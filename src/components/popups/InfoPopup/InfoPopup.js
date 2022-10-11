
import Popup from "../Popup/Popup";

import errorIcon from '../../../images/error.svg';
import okIcon from '../../../images/ok.svg';

import './InfoPopup.css';

function InfoPopup(props) {
  const {
    isOpen,
    typeInfo,
    infoMessage,
    onClose: handleClosePopupClick,
  } = props;
  const typeInfoIcon =  typeInfo ? (typeInfo === 'ok' ? okIcon : errorIcon) : null;
  return (
    <Popup
      isOpen={isOpen}
      onClose={handleClosePopupClick}
      popupClassName="Popup_type_tooltip"
      popupContainerClassName="Popup__container_type_tooltip"
    >
      <div className="InfoPopup">
        <img className="InfoPopup__icon" src={typeInfoIcon} alt={infoMessage}/>
        <p className="InfoPopup__message">{infoMessage}</p>
      </div>
    </Popup>
  );
}

export default InfoPopup;