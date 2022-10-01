import './MEMenuPopupButton.css';

function MEMenuPopupButton(props) {
  const {
    onClick: handleMenuPopupButtonClick,
  } = props;
  return (
    <button
      type="button"
      className="MEMenuPopupButton"
      onClick={handleMenuPopupButtonClick}
    >
    </button>
  );
}

export default MEMenuPopupButton;