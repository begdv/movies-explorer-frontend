import menuPopupBtn from '../../../images/popup-menu.svg'

import './MEMenuPopupButton.css';

function MEMenuPopupButton(props) {
  const {
    onClick: handleMenuPopupButtonClick,
  } = props;
  return (
    <button
      className="MEMenuPopupButton"
      onClick={handleMenuPopupButtonClick}
    >
      <img src={menuPopupBtn} alt="Меню" />
    </button>
  );
}

export default MEMenuPopupButton;