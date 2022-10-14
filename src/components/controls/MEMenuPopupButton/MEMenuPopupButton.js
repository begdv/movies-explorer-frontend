import { useLocation } from 'react-router-dom';

import clsx from 'clsx'

import './MEMenuPopupButton.css';

function MEMenuPopupButton(props) {
  const route = useLocation().pathname;
  const {
    onClick: handleMenuPopupButtonClick,
  } = props;

  return (
    <button
      type="button"
      className={clsx('MEMenuPopupButton', (route === '/') ? 'MEMenuPopupButton_page_main' : '')}
      onClick={handleMenuPopupButtonClick}
    >
    </button>
  );
}

export default MEMenuPopupButton;
