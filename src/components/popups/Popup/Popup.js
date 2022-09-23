import './Popup.css';
import clsx from 'clsx'

function Popup(props) {
  const {
    isOpen,
    onClose: handleClosePopupClick,
    popupClassName,
    popupContainerClassName,
  } = props;
  const popupOpened = (isOpen) ? 'Popup_opened' : '';
  return (
    <div className={clsx('Popup', popupClassName, popupOpened)}>
      <div className={clsx('Popup__container', popupContainerClassName)}>
      <button
          className="Popup__button-close"
          type="button"
          onClick={handleClosePopupClick}
        >
      </button>
      {props.children}
      </div>
    </div>
  );
}

export default Popup;