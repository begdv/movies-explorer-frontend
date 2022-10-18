import './Popup.css';
import clsx from 'clsx'

function Popup(props) {
  const {
    isOpen,
    onClose: handleClosePopupClick,
    popupClassName,
    popupContainerClassName,
    popupButtonClassName,
  } = props;

  const popupOpened = (isOpen) ? 'Popup_opened' : '';

  return (
    <div className={clsx('Popup', popupClassName, popupOpened)}>
      <div className={clsx('Popup__container', popupContainerClassName)}>
      <button
          className={clsx('Popup__button-close', popupButtonClassName)}
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
